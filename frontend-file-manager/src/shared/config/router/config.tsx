import {ReactComponent as DashboardIcon} from "../../assets/routeIcons/dashboard_icon.svg";
import {InternalStorage} from "pages/InternalStorage/ui/InternalStorage";

export interface RoutingList {
    langKey: string
    iconJsx: JSX.Element
    to: string
    key: string
    component?: JSX.Element
    backLink?: string
}


export const ROUTES: RoutingList[] = [
    {
        langKey: "pages.home",
        iconJsx: <DashboardIcon/>,
        to: '/',
        key: "HOME",
        component: <InternalStorage/>,
        backLink: "/"
    },
]