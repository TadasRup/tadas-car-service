import {HomePage} from "../pages/HomePage";
import {MastersPageHeader} from "../components/Header/MastersPageHeader";
import {Footer} from "../components/Footer/Footer";

export function MastersPageLayout() {
    return (
        <>
            <MastersPageHeader/>
            <HomePage/>
            <Footer/>
        </>
    )
}
