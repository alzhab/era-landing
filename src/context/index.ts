import { createContext } from "react";
import { services, stores } from "@modules";
import {ThemesTypes} from '@models/themes';

export const AppContext = createContext({ stores, services });

export const ThemeContext = createContext({
  themeName: ThemesTypes.light,
  changeTheme: (theme: ThemesTypes) => console.log(theme),
});

