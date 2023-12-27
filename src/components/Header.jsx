import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <h1>App Header </h1>

            <Link to="/">Página Principal</Link>
            <br />

            <Link to="/cuadros-marineros">Cuadros Marineros</Link>
            <br />

            <Link to="/botes-marineros">Botes Marineros</Link>
        </nav>
    )
}

export { Header };