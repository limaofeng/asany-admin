declare module 'holderjs' {
  export interface Options {
    domain?: string;
    images: HTMLElement | null | string;
  }

  export interface Theme {
    bg: string;
    fg: string;
    size: number;
    font: string;
    fontweight: string;
  }

  export interface Holderjs {
    run: (options: Options) => void;
    addTheme: (name: string, theme: Theme) => void;
  }

  const holderjs: Holderjs;

  export default holderjs;
}
