import {Link} from "react-router-dom";

export function MastersPageHeader() {
    return (
        <header className="p-5 text-bg-info">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="text-end col-8">
                        <Link to='/dashboard' type="button" class="btn btn-outline-light me-3">GO BACK</Link>
                        <Link to='/Home' type="button" class="btn btn-outline-light me-3">Logout</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
