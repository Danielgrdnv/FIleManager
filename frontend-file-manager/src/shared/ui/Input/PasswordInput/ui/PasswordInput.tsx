import cls from './PasswordInput.module.scss'
import clsx from "clsx";
import {IInputProps, Input} from "../../Input/ui/Input";
import {ReactComponent as CrossIcon} from "../../../../assets/cross_icon.svg";
import {ChangeEvent, useState} from "react";
import {ReactComponent as OpenIcon} from "../../assets/password_open_icon.svg";
import {ReactComponent as CloseIcon} from "../../assets/password_close_icon.svg";

interface IPasswordInputProps extends IInputProps {
    className?: string
    onHandleChange: (str: string) => void
}

export const PasswordInput = (props: IPasswordInputProps) => {
    const {className, onHandleChange, value, ...otherProps} = props;

    const [isShow, setShow] = useState<boolean>(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange(e.target.value)
    }

    const handleChangePasswordShow = () => {
        setShow(!isShow)
    }

    return (
        <Input
            rightIcon={<div className={cls.icon} onClick={handleChangePasswordShow}>
                {isShow ? <OpenIcon/> : <CloseIcon/>}
            </div>}
            themeInput={'default'}
            type={isShow ? " text" : "password"}
            className={clsx(cls.passwordInput, className)}
            onChange={onChange}
            value={value ?? ''}
            {...otherProps}
        />
    );
};