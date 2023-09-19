import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import { DashboardPost } from "../pages/DashboardPost";


export function PublicLayout() {
    return (
        <>
            <Header/>
            <main><Outlet/></main>
            <DashboardPost />
            <Footer/>
        </>
    )
}