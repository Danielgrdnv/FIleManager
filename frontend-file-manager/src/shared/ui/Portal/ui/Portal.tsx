import React, {memo} from 'react';
import {createPortal} from 'react-dom';
import usePortal from '../hooks/usePortal';

type PortalProps = {
    id: string,
    children: React.ReactNode,
    isRemovable?: boolean
}

const Portal = ({id, children, isRemovable}: PortalProps) => {
    let target = usePortal(id, isRemovable);
    return createPortal(children, target, id);
};

export default Portal;
