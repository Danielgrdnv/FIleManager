import cls from './CustomModal.module.scss'
import clsx from "clsx";
import React, {RefObject, useRef} from "react";
import Portal from "../../Portal/ui/Portal";
import useOutsideClick from "shared/lib/hooks/useOutsideClick";

interface ICustomModalProps {
    className?: string
    children: React.ReactNode,
    onClose: (e?: React.MouseEvent<HTMLDivElement>) => void,
    isOpen: boolean,
    cords: any
}

export const CustomModal = (props: ICustomModalProps) => {
    const {
        isOpen,
        onClose,
        children,
        className,
        cords
    } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    useOutsideClick(modalRef, () => {
        onClose();
    })

    return (
        <>
            {isOpen &&
                <Portal id="custom-modal-root">
                    <div ref={modalRef} onClick={onClose} className={clsx(cls.customModal, className)}>
                        <div style={{top: cords.y, left: cords.x}} className={cls.wrapper}
                            //onClick={handleContentClick}
                        >
                            {children}
                        </div>
                    </div>
                </Portal>
            }
        </>
    );
};