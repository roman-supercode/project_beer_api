import "./Navigation.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";

function Navigation() {
    return (
        <div className="navigation">
            <Link to="/"><img src={Logo} alt="Beer" /></Link>
        </div >
    );
};

export default Navigation;