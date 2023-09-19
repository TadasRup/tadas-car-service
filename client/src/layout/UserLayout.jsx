import {Footer} from "../components/Footer/Footer";
import {Dashboard} from "../pages/Dashboard";
import {DashboardHeader} from "../components/Header/DashboardHeader";


export function UserLayout() {
    return (
        <>
            <DashboardHeader/>
            <main><Dashboard/></main>
            <Footer/>
        </>
    )
}