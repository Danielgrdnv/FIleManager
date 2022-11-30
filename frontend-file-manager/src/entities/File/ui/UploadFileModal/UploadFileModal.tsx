import cls from './UploadFileModal.module.scss'
import clsx from "clsx";
import {Modal} from "shared/ui/Modal";
import React, {useState} from "react";
import {Button} from "shared/ui/Button";
import {ReactComponent as UploadIcon} from './assets/upload_file_icon.svg'
import {uploadFileEvent} from "../../model/fileModel";

interface IUploadFileModalProps {
    className?: string
    onClose: () => void,
    isOpen: boolean,
}

export const UploadFileModal = (props: IUploadFileModalProps) => {
    const {className, onClose, isOpen} = props;
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<FormData>()

    const handleUpload = () => {
        if (file) uploadFileEvent(file)
    }

    const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0]
        const name = e.target.files[0].name
        setTitle(name)
        const formData = new FormData();
        formData.append('file', file)
        setFile(formData)
    }

    return (
        <Modal
            title={'Upload file'}
            className={clsx(cls.addFileModal, className)}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Button>
                <input type="file" hidden id="input__file" multiple
                       accept={".png, .jpg, .jpeg .svg .webp"}
                       onChange={handleUploadFile}/>
                <label className={cls.inputLabel} htmlFor="input__file">
                    <span><UploadIcon/></span>
                    <span>{title || 'Select file'}</span>
                </label>
            </Button>
            <Button onClick={handleUpload}>Upload</Button>
        </Modal>
    );
};