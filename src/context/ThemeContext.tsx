import { createContext, useState } from 'react';

const initialThemeContext = {
    darkTheme: false,
    switchTheme: () => { }
}


export const ThemeContext = createContext(initialThemeContext);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const switchTheme = () => {
        setDarkTheme(!darkTheme)
        console.log(darkTheme)
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};