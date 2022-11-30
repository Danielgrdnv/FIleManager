import cls from './AddFileModal.module.scss'
import clsx from "clsx";
import {Modal} from "shared/ui/Modal";
import {createFileMutation, currentPathStore} from "../../model/fileModel";
import {Input} from "../../../../shared/ui/Input";
import {ChangeEvent, useState} from "react";
import {Button} from "../../../../shared/ui/Button";

interface IAddFileModalProps {
    className?: string
    onClose: () => void,
    isOpen: boolean,
}

export const AddFileModal = (props: IAddFileModalProps) => {
    const {className, onClose, isOpen} = props;
    const currentPath = currentPathStore().join('/')
    const [createFile, {isLoading}] = createFileMutation();
    const [title, setTitle] = useState<string>('')

    const handleCreate = () => {
        createFile({
            title: title,
            path: currentPath,
            type: 'dir'
        }).then(() => onClose())
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    return (
        <Modal
            title={'Add folder'}
            className={clsx(cls.addFileModal, className)}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Input placeholder={'Title'} value={title} onChange={onChange}/>
            <Button onClick={handleCreate} isLoading={isLoading}>Create file</Button>
        </Modal>
    );
};