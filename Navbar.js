import logo from "../image/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white " style={{height:"70px",borderBottom:"1px solid #eee",backgroundColor:"white"}}>
            <div className="container p-2">

                {/* Logo */}
                <Link className="navbar-brand" to="/HomePage">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: "25%" }}
                    />
                </Link>

                {/* Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <div className="d-flex" role="search">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/Signup"
                                >
                                    Signup
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/Product">
                                    Product
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/Pricing">
                                    Pricing
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/Support">
                                    Support
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;