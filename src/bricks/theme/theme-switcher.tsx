import type React from 'react';
import { useContext } from 'react';
import { Button } from '..';
import { DayModeIcon } from '../icons/day-mode';
import { NightModeIcon } from '../icons/night-mode';
import { ThemeContext } from './theme-provider';

export const ThemeSwitcher: React.FC = (props) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme} {...props}>
      {theme === 'light' ? <DayModeIcon /> : <NightModeIcon />}
    </Button>
  );
};
