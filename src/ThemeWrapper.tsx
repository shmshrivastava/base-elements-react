import React from 'react';
import DefaultTheme from './defaultTheme.json';

interface Theme {
  vars?: {
    colors?: any;
    spacings?: any;
    others?: any;
  };
  components?: any;
  id: string;
}

function getCurrentSelectedTheme(themes: Theme[], currentThemeId?: string) {
  let selectedThemeId = currentThemeId;
  const defaultTheme = { ...DefaultTheme, id: 'default' };
  if (themes?.length === 0) {
    return defaultTheme;
  }
  if (!currentThemeId) {
    selectedThemeId = 'default';
  }

  const selectedTheme = themes?.filter(
    (theme) => theme.id === selectedThemeId
  )[0];

  return selectedTheme
    ? { ...defaultTheme, ...selectedTheme }
    : { ...defaultTheme, ...themes[0] };
}

export function setThemeVariables(themes: Theme[], currentThemeId?: string) {
  const theme = getCurrentSelectedTheme(themes || [], currentThemeId);
  const root =
    document.querySelector<HTMLElement>(':root') || document.documentElement;
  Object.keys(theme.vars?.colors || []).forEach((colorKey) => {
    root.style.setProperty(`--${colorKey}`, theme.vars?.colors[colorKey]);
  });
  Object.keys(theme.vars?.spacings || []).forEach((spacingKey) => {
    root.style.setProperty(`--${spacingKey}`, theme.vars?.spacings[spacingKey]);
  });
  Object.keys(theme.vars?.others || []).forEach((otherKey) => {
    root.style.setProperty(`--${otherKey}`, theme.vars?.others[otherKey]);
  });
}

interface ThemeWrapperProps {
  themes?: Theme[];
  currentThemeId?: string;
  children?: React.ReactNode;
}

const ThemeWrapper = ({
  themes,
  currentThemeId,
  children
}: ThemeWrapperProps) => {
  setThemeVariables(themes || [], currentThemeId);
  return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeWrapper;
