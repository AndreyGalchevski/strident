import { useState, TouchEvent } from "react";
import Image from "next/image";
import styled from "styled-components";
import {HomeImage} from "../../data/homeImages";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 400px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const DesktopArrows = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  justify-content: space-between;
  pointer-events: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ArrowButton = styled.button`
  pointer-events: all;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
`;

const ThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;

  &.active {
    border-color: #0070f3;
  }
`;

const ThumbnailImage = styled(Image)`
  border-radius: 4px;
`;

interface Props {
    images: HomeImage[];
}

export default function ImageGallery ({ images }: Props)  {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDragStart = (e: TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
    };

    const handleDragEnd = (e: TouchEvent<HTMLDivElement>) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) handleNext();
        if (endX - startX > 50) handlePrev();
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <GalleryContainer>
            <MainImageContainer>
                <ImageWrapper
                    onTouchStart={handleDragStart}
                    onTouchEnd={handleDragEnd}
                >
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        layout="fill"
                        objectFit="cover"
                    />
                </ImageWrapper>
                <DesktopArrows>
                    <ArrowButton onClick={handlePrev}>◀</ArrowButton>
                    <ArrowButton onClick={handleNext}>▶</ArrowButton>
                </DesktopArrows>
            </MainImageContainer>
            <ThumbnailContainer>
                {images.map((src, index) => (
                    <ThumbnailWrapper
                        key={index}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <ThumbnailImage
                            src={src.thumbnail}
                            alt={src.alt}
                            width={60}
                            height={60}
                        />
                    </ThumbnailWrapper>
                ))}
            </ThumbnailContainer>
        </GalleryContainer>
    );
};

