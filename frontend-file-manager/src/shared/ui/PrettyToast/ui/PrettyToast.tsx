import React, { useRef} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import cls from './PrettyToast.module.scss'
import clsx from "clsx";
import {ReactComponent as ExitIcon} from "../../../assets/cross_icon.svg";

interface IPrettyToastProps {
    className?: string
}

const PrettyToast = (props: IPrettyToastProps) => {
    // const ref = useRef<HTMLDivElement>(null);
    //
    // if (ref.current?.children[0]?.children?.length && ref.current?.children[0]?.children?.length > 0) {
    //     toast.dismiss();
    // }

    return (
        <>
            <ToastContainer
                className={clsx(cls.toastContainer)}
                // ref={ref}
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                draggable
                limit={2}
                pauseOnHover
                theme={'colored'}
                closeButton={CloseButton}
            />
        </>
    );
};

export default PrettyToast;

const CloseButton = ({closeToast}: any) => (
    <div className={cls.icon} onClick={closeToast}><ExitIcon/></div>
);