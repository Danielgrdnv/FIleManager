import cls from './FileRow.module.scss'
import clsx from "clsx";

interface IFileRowProps {
    className?: string
}

export const FileRow = (props: IFileRowProps) => {
    const {className} = props;

    return (
        <div className={clsx(cls.fileRow, className)}>
            {}
        </div>
    );
};