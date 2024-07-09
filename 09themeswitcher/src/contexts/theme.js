// STEP (1)

import { createContext, useContext } from "react";

// THIS IS THE CONTEXT BLUEPRINT (This comprises of all the props required by the global context)
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// THIS IS THE CONTEXT WRAPPER COMPONENT (via which the ThemeContext object properties are accessed )
export const ThemeProvider = ThemeContext.Provider

// THIS IS THE CUSTOM HOOK USED TO CHANGE THEME BY PASSING PROPS VIA CONTEXT API
export default function useTheme(){
    return useContext(ThemeContext)
}