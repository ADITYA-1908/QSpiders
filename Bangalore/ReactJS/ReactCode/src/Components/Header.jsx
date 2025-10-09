import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <div className="container-fluid">

                <a className="navbar-brand fw-bold fs-4" href="#">
                    MyApp
                </a>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-light" type="button">
                            Sign In
                        </button>
                        <button className="btn btn-light text-primary fw-semibold" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
