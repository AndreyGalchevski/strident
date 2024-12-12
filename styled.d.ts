import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      red: string;
      grey: string;
      darkGrey: string;
      white: string;
    };
    breakpoints: {
      mobile: string;
      small: string;
    };
  }
}
