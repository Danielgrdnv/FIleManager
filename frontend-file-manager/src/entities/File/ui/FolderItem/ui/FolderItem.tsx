import cls from './FolderItem.module.scss'
import clsx from "clsx";
import {ReactComponent as FolderIcon} from "../assets/folder_icon.svg";
import {ReactComponent as TxtIcon} from "../assets/txt_icon.svg";
import {ReactComponent as SettingsIcon} from "../assets/settings_icon.svg";

import {IFile} from "entities/File/flieTypes";
import React, {useMemo, useRef, useState} from "react";
import SettingsFileModal from "../../SettingsFileModal/ui/SettingsFileModal";
import getCorrectCords from "shared/lib/utils/getCorrectCords";
import {downloadFileFx} from "../../../model/fileModel";

interface IFolderItemProps extends IFile {
    className?: string
}

export const FolderItem = (props: IFolderItemProps) => {
    const {className, size, title, childCount, type} = props;
    const [isOpen, setOpen] = useState(false)


    const handleOpenSettings = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setOpen(true)
    }

    const handleCloseSettings = (e?: React.MouseEvent<HTMLDivElement>) => {
        e?.stopPropagation()
        setOpen(false)
    }

    const ref = useRef<HTMLDivElement>(null);
    const cords = useMemo(() => ref.current && getCorrectCords(ref.current), [isOpen]);

    // const handleDownload = () => {
    //     downloadFileFx({
    //
    //     })
    // }

    return (
        <>
            <div className={clsx(cls.folderItem, className)}>
                <div className={cls.icon}>
                    {type === 'dir' ? <FolderIcon/> : <TxtIcon/>}
                </div>
                <div>
                    <div className={cls.title}>{title}</div>
                    <div className={cls.info}>
                        {type === 'dir' ? <span>{childCount} item</span> : undefined}
                        {/*∙*/}
                        {size ? <span>{size} B</span> : undefined}
                    </div>
                </div>
                <div
                    ref={ref}
                    onClick={handleOpenSettings}
                    className={cls.settings}
                >
                    <SettingsIcon/>
                </div>
            </div>
            <SettingsFileModal
                title={title}
                isOpen={isOpen}
                onClose={handleCloseSettings}
                cords={cords ?? {x: 0, y: 0}}
            />
        </>
    );
};