import cls from './PageTitle.module.scss'
import clsx from "clsx";

interface ITitleProps {
    className?: string
    children: string
}

export const PageTitle = (props: ITitleProps) => {
    const {className, children} = props;

    return (
        <div className={clsx(cls.pageTitle, className)}>
            {children}
        </div>
    );
};