import React, {ReactElement} from "react";
import {ErrorBoundary as ErrorBoundaryProvider} from 'react-error-boundary'
// import {ErrorWindow} from "widgets/ErrorWindow";


interface IErrorBoundaryProps {
    children: ReactElement;
}

const ErrorBoundary = (props: IErrorBoundaryProps) => {
    const {children} = props;
    return (
        <>
            {/*<ErrorBoundaryProvider FallbackComponent={ErrorWindow}>*/}
            {/*    {children}*/}
            {/*</ErrorBoundaryProvider>*/}
        </>
    );
};

export default ErrorBoundary;