import clsx from "clsx";
import React, {memo, useCallback, useEffect, useState} from "react";
import {ICorrectCords} from "shared/lib/utils/getCorrectCords";
import {CustomModal} from "shared/ui/CustomModal";
import cls from './SettingsFileModal.module.scss'
import {deleteFileEvent, downloadFileEvent, downloadFileFx} from "../../../model/fileModel";

interface IRowsPerPageModalProps {
    className?: string
    onClose: (e?: React.MouseEvent<HTMLDivElement>) => void,
    isOpen: boolean,
    cords: ICorrectCords
    title: string
}

export const SettingsFileModal = (props: IRowsPerPageModalProps) => {
    const {className, isOpen, onClose, cords, title} = props;
    const [cordsRef, setCordsRef] = useState({});
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(isOpen)
    }, [isOpen])

    const handleRect = useCallback((node: HTMLUListElement) => {
        const refCords = node?.getBoundingClientRect()
        if (refCords?.height && cords?.y && refCords.height + cords.y > window.innerHeight)
            setCordsRef({x: cords.x, y: window.innerHeight - refCords.height - 24})
        else {
            setCordsRef({...cords})
        }
    }, [cords]);

    const handleDownload = () => {
        downloadFileEvent(title)
    }
    const handleDelete = () => {
        deleteFileEvent(title)
    }


    const settings = [{
        title: 'download',
        click: handleDownload
    },
        {
            title: 'delete',
            click: handleDelete
        }]

    return (<CustomModal isOpen={isOpen} onClose={onClose} cords={cordsRef} className={cls.modalCords}>
            {isMounted && <ul
                ref={handleRect}
                className={clsx(cls.rowsPerPageModal, className)}
            >
                {settings.map((item) =>
                    <React.Fragment key={`rowsPerPage-${item}`}>
                        <li
                            onClick={item.click}
                            role="presentation"
                        >
                            {item.title}
                        </li>
                    </React.Fragment>
                )}
            </ul>}
        </CustomModal>
    );
};

export default memo(SettingsFileModal);