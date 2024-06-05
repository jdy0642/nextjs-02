import { createContext, SetStateAction, Dispatch } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
