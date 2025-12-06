import { createContext } from 'react';

type ButtonContextType = {
  text: string;
  children?:number;
  onClick: () => void;
};

export const ButtonContext = createContext<ButtonContextType>({
  text: '',
  children:0,
  onClick: () => {},
});
