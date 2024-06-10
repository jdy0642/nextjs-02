import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import ThemeContext from '@/components/themeContext';

const themes = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
