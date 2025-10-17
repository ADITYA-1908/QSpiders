import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = ({ setPage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-4" href="#">
                    🛒MyCart
                </a>

                <div className="d-flex gap-2 ms-auto">
                    <button
                        className="btn btn-outline-light"
                        type="button"
                        onClick={() => setPage("signin")}
                    >
                        Sign In
                    </button>
                    <button
                        className="btn btn-light text-primary fw-semibold"
                        type="button"
                        onClick={() => setPage("signup")}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
