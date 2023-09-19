import {Footer} from "../components/Footer/Footer";
import {Dashboard} from "../pages/Dashboard";
import {DashboardHeader} from "../components/Header/DashboardHeader";
import {DashboardPost} from "../pages/DashboardPost";


export function UserLayout() {
    return (
        <>
            <DashboardHeader/>
            <main><Dashboard/></main>
            <DashboardPost />
            <Footer/>
        </>
    )
}