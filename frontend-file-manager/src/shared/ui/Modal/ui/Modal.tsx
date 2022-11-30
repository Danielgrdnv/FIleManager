import cls from './Modal.module.scss'
import clsx from "clsx";
import React, {useEffect, useRef} from 'react';
import {ReactComponent as CrossIcon} from "../assets/cross_icon.svg";
import {Portal} from "shared/ui/Portal";
import {PageTitle} from "shared/ui/PageTitle";
import useOutsideClick from "shared/lib/hooks/useOutsideClick";

interface IModalProps {
    className?: string
    onClose: () => void,
    isOpen: boolean,
    children: React.ReactNode,
    title?: string,
}

const Modal = (props: IModalProps) => {
    const {
        isOpen,
        onClose,
        children,
        title,
        className
    } = props;
    const body = document.getElementsByTagName("body");

    useEffect(() => {
        if (isOpen) {
            body.item(0)!.style.overflow = "hidden";
        }
        return () => {
            body.item(0)!.style.overflow = "auto";
        }
    }, [isOpen])

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        onClose();
    })

    return (
        <>{isOpen &&
            <Portal id="modal-root">
                <div className={clsx(cls.modal)}>
                    <div ref={ref} className={clsx(className, cls.wrapper)}>

                        <div className={cls.header}>
                            <div style={{width: 32, height: 32}}/>
                            <PageTitle className={cls.title}>{title || 'title'}</PageTitle>
                            <CrossIcon onClick={onClose} className={cls.crossIcon}/>
                        </div>

                        <div className={cls.content}>{children}</div>

                    </div>
                </div>
            </Portal>
        }</>
    );
};

export default Modal;