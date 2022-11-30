import cls from './Input.module.scss'
import clsx from "clsx";
import {InputHTMLAttributes, ReactNode} from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    themeInput?: 'clear' | 'default'
    fullWidth?: boolean
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    onEnterPress?: () => void,
}

export const Input = (props: IInputProps) => {
    const {
        themeInput = props.themeInput || 'default',
        className,
        leftIcon,
        rightIcon,
        fullWidth,
        onEnterPress,
        ...otherProps
    } = props

    return (
        <div className={cls.wrapper}>
            <div className={cls.leftIcon}>{leftIcon}</div>
            <input
                onKeyPress={e => e.key === 'Enter' && onEnterPress ? onEnterPress() : undefined}
                className={clsx(
                    cls.input,
                    {[cls.fullWidth]: fullWidth},
                    themeInput && cls[themeInput],
                    {[cls.leftInputIcon]: leftIcon},
                    {[cls.rightInputIcon]: rightIcon},
                    className)}
                {...otherProps}
            />
            <div className={cls.rightIcon}>{rightIcon}</div>
        </div>
    );
};