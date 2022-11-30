import cls from './Loader.module.scss'
import clsx from "clsx";
import {ReactComponent as LoaderIcon} from '../assets/loader_icon.svg'

interface ILoaderProps {
    className?: string
}

export const Loader = (props: ILoaderProps) => {
    const {className} = props;

    return (
        <div className={clsx(cls.loader, className)}>
            <LoaderIcon/>
        </div>
    );
};