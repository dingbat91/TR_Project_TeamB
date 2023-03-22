import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to ='/'>Home</NavLink></li>
                <li><NavLink to ='/aboutus'>About Us</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
