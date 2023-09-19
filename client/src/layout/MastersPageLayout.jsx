import {MastersPage} from "../pages/MastersPage";
import {MastersPageHeader} from "../components/Header/MastersPageHeader";
import {Footer} from "../components/Footer/Footer";

export function MastersPageLayout() {
    return (
        <>
            <MastersPageHeader/>
            <MastersPage/>
            <Footer/>
        </>
    )
}
