import cls from './Layout.module.scss'
import clsx from "clsx";
import React, {useCallback, useState} from "react";
import {changeBackPathEvent, createFileMutation, currentPathStore} from "entities/File/model/fileModel";
import {ReactComponent as CreateIcon} from '../assets/create_folder_icon.svg'
import {ReactComponent as SearchIcon} from '../assets/search_icon.svg'
import {ReactComponent as BackIcon} from '../assets/back_icon.svg'
import {ReactComponent as UploadIcon} from '../assets/upload_file_icon.svg'

import {AddFileModal} from "entities/File/ui/AddFileModal/AddFileModal";
import {UploadFileModal} from "entities/File/ui/UploadFileModal/UploadFileModal";


interface ILayoutProps {
    className?: string
    title: string
    children: React.ReactNode
}

export const Layout = (props: ILayoutProps) => {
    const {className, title, children} = props;
    const [isOpen, setOpen] = useState<'' | 'upload' | 'add'>('')

    const handleBack = () => {
        changeBackPathEvent()
    }

    const handleSearch = () => {
    }

    const handleUpload = () => {

    }

    const handleOpenModal = (str: '' | 'upload' | 'add') => {
        setOpen(str)
    }

    const handleCloseCreate = useCallback(() => {
        setOpen('')
    }, [])


    return (
        <>
            <div className={clsx(cls.layout, className)}>
                <div className={cls.header}>
                    <div className={cls.flex}>
                        <div className={clsx(cls.back_icon, cls.icons)} onClick={handleBack}><BackIcon/></div>
                        <div className={cls.title}>{title}</div>
                    </div>

                    <div className={cls.flex}>
                        <div className={clsx(cls.search_icon, cls.icons)} onClick={()=>handleOpenModal('upload')}><UploadIcon/></div>
                        {/*<div className={clsx(cls.search_icon, cls.icons)} onClick={handleSearch}><SearchIcon/></div>*/}
                        <div className={clsx(cls.create_icon, cls.icons)} onClick={()=>handleOpenModal('add')}><CreateIcon/></div>
                    </div>
                </div>

                <div className={cls.content}>{children}</div>
                {/*<div className={cls.footer}>footer</div>*/}
            </div>
            <AddFileModal isOpen={isOpen === 'add'} onClose={handleCloseCreate}/>
            <UploadFileModal isOpen={isOpen === 'upload'} onClose={handleCloseCreate}/>
        </>
    );
};