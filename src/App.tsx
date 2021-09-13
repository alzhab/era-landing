import React, { useState } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import { Provider } from "mobx-react";
import * as modules from "@modules";
import { AppContext, ThemeContext } from "@context";
import { configure } from "mobx";
import { HomePage } from "@pages";
import { Routes } from "@assets/const";
import { ThemesTypes } from "@models/themes";

configure({
  enforceActions: "never",
});

function App() {
  const [themeName, setThemeName] = useState(
    (localStorage.getItem("theme") as ThemesTypes) || ThemesTypes.light
  );

  const changeTheme = (theme: ThemesTypes) => {
    setThemeName(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <AppContext.Provider value={modules}>
      <ThemeContext.Provider value={{ themeName, changeTheme }}>
        <Provider {...modules.stores}>
          <BrowserRouter>
            <LastLocationProvider>
              <Route path={Routes.home} component={HomePage} />
              <Redirect to={Routes.home} />
            </LastLocationProvider>
          </BrowserRouter>
        </Provider>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
