import {useEffect} from "react";

const useOutsideClick = (ref: any, handleClick: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClick();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        //document.addEventListener('touchstart', handleClickOutside);
        return () => {

            document.removeEventListener("mousedown", handleClickOutside);
            //document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref]);
}


export default useOutsideClick
