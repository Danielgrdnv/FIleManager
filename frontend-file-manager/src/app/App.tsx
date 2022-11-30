import React, {Suspense, useEffect} from "react";
import {PrivateRoutes} from "./providers/RouterProvider";
import {PublicRoute} from "./providers/RouterProvider";
import {PrettyToast} from "shared/ui/PrettyToast";
import {Layout} from "shared/ui/Layout";


function App() {
    const isAuth = true;

    return (
        <>
            <PrettyToast/>
            <Suspense fallback={'...fallback'}>
                {isAuth ?
                    <Layout title={'Home'}>
                        <PrivateRoutes/>
                    </Layout>
                    : <PublicRoute/>
                }
            </Suspense>
        </>
    )
}

export default App