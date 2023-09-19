import {Link} from "react-router-dom";


export function Header() {
    return (
        <header className="p-4 text-bg-info">
            <div className="container">
                <h1 className="text-center">CAR SERVICE</h1>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-8 col-sm-4 col-lg-2"> </div>
                    <div className="text-end">
                        <Link to='/login' type="button" class="btn btn-outline-light me-3 text-dark text-center">Log in</Link>
                        <Link to='/register' type="button" class="btn btn-outline-light me-3 text-dark text-center">Register</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
