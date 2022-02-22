/// <reference types="react-scripts" />

// Import .png and .ttf files
declare module '*.ttf';
declare module '*.png';

// Import react-typical
declare module 'react-typical' {
  interface TypicalProps {
    steps: (string | number)[];
    loop: number;
    wrapper?: string;
  }

  declare const Typical: React.FC<TypicalProps>;

  export default Typical;
}
