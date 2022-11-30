import cls from './InternalStorage.module.scss'
import clsx from "clsx";
import {FolderItem} from "entities/File/ui/FolderItem/ui/FolderItem";
import {changeAddPathEvent, filesStore, getFilesMutation} from "entities/File/model/fileModel";
import {useCallback, useEffect} from "react";
import {IFile} from "../../../entities/File/flieTypes";


interface IInternalStorageProps {
    className?: string
}

export const InternalStorage = (props: IInternalStorageProps) => {
    const {className} = props;
    const files = filesStore()
    const [getFiles, {isLoading}] = getFilesMutation()

    useEffect(() => {
        getFiles({}).then()
    }, [])

    const handleClick = (item: IFile) => {
        if (item.type === 'dir')
            changeAddPathEvent(item.title)
    }

    return (
        <div className={clsx(cls.internalStorage, className)}>
            {files.files.map((item, index) =>
                <div key={`item-${index}`} onClick={() => handleClick(item)}>
                    <FolderItem {...item}/>
                </div>
            )}
        </div>
    );
};