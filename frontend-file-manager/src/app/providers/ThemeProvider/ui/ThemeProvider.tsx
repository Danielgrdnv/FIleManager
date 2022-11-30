import React, {ReactNode, useEffect} from 'react';


interface IThemeProviderProps {
    children: ReactNode
}

const ThemeProvider = (props: IThemeProviderProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    );
};

export default ThemeProvider;