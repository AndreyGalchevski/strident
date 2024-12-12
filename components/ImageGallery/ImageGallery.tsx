import { useState, TouchEvent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { HomeImage } from "../../data/homeImages";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
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
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  scrollbar-width: thin;
  scrollbar-color: #0070f3 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0070f3;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

const ThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  flex: 0 0 auto;

  &.active {
    border-color: #0070f3;
  }
`;

const ThumbnailImage = styled(Image)`
  border-radius: 4px;
`;

interface Props {
    images: HomeImage[]
}

export default function ImageGallery({ images }: Props) {
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
                        layout="intrinsic"
                        objectFit="contain"
                        width={800}
                        height={400}
                    />
                </ImageWrapper>
                <DesktopArrows>
                    <ArrowButton onClick={handlePrev}>◀</ArrowButton>
                    <ArrowButton onClick={handleNext}>▶</ArrowButton>
                </DesktopArrows>
            </MainImageContainer>
            <ThumbnailContainer>
                {images.map((image, index) => (
                    <ThumbnailWrapper
                        key={image.src}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <ThumbnailImage
                            src={image.thumbnail}
                            alt={image.alt}
                            width={60}
                            height={60}
                        />
                    </ThumbnailWrapper>
                ))}
            </ThumbnailContainer>
        </GalleryContainer>
    );
};

