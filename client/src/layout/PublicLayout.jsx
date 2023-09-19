import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import { DashboardPost } from "../pages/DashboardPost";
import { DashboardPost2 } from "../pages/DashboardPost2";


export function PublicLayout() {
    return (
        <>
            <Header/>
            <main><Outlet/></main>
            <DashboardPost />
            <DashboardPost2 />
            <Footer/>
        </>
    )
}