export enum ButtonTypes {
    primary = 'primary',
    primaryOutline = 'primaryOutline',
}

export type ButtonProps = {
  children: React.ReactNode;
  onClick:()=>void;
  isActive?:boolean;
  type?:ButtonTypes;
  style?:React.CSSProperties;
  disabled?:boolean;
};

