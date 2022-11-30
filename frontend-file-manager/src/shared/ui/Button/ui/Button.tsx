import cls from './Button.module.scss'
import clsx from "clsx";
import {ButtonHTMLAttributes} from "react";
import {Loader} from "../../Loader/ui/Loader";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    isShort?: boolean
    themeButton?: 'primary' | 'secondary' | 'none';
    themeColor?: 'primary' | 'secondary' | 'transparent' | 'error' | 'success' | 'none'
    isLoading?: boolean
}


export const Button = (props: IButtonProps) => {
    const {
        className,
        children,
        isShort,
        themeButton = 'primary',
        themeColor = 'primary',
        isLoading,
        ...otherProps
    } = props;

    return (
        <button
            disabled={isLoading || otherProps.disabled}
            className={
                clsx(
                    className,
                    cls.button,
                    cls[`theme-${themeButton}`],
                    cls[`color-${themeColor}`],
                    {[cls.isShort]: isShort}
                )}
            {...otherProps}
        >
            {isLoading
                ? <Loader/>
                : children
            }
        </button>
    );
};