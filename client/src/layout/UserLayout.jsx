import {Footer} from "../components/Footer/Footer";
import {Dashboard} from "../pages/Dashboard";
import {DashboardHeader} from "../components/Header/DashboardHeader";
import {DashboardPost} from "../pages/DashboardPost";
import {DashboardPost2} from "../pages/DashboardPost2";


export function UserLayout() {
    return (
        <>
            <DashboardHeader/>
            <main><Dashboard/></main>
            <DashboardPost />
            <DashboardPost2 />
            <Footer/>
        </>
    )
}