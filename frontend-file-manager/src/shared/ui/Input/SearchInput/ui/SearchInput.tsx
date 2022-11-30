import cls from './SearchInput.module.scss'
import clsx from "clsx";
import {Input} from '../../index';
import {ReactComponent as SearchIcon} from "../../assets/search_input_icon.svg";
import {ChangeEvent, EventHandler, useRef} from "react";
import {ReactComponent as CrossIcon} from "shared/assets/cross_icon.svg";

interface ISearchInputProps {
    className?: string
    onHandleChange: (str: string) => void
    value: string | number | null | undefined
}

export const SearchInput = (props: ISearchInputProps) => {
    const {className, onHandleChange, value} = props;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange(e.target.value)
    }

    const onClear = () => {
        onHandleChange('')
    }

    return (
        <Input

            leftIcon={<SearchIcon className={cls.icon}/>}
            rightIcon={value && <CrossIcon onClick={onClear} className={cls.icon}/>}
            themeInput={'default'}
            className={clsx(cls.searchInput, className)}
            onChange={onChange}
            value={value ?? ''}
        />
    );
};