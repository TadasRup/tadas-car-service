import {Footer} from "../components/Footer/Footer";
import {DashboardHeader} from "../components/Header/DashboardHeader";
import {NoPage} from "../pages/NoPage";

export function NoPageLayout() {
    return (
        <>
            <DashboardHeader/>
            <NoPage />
            <Footer/>
        </>
    )
}