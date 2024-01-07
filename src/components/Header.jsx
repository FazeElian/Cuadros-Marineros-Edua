import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

// Estilos para este componente
import "../assets/css/Header.css";

// Imágenes - Iconos
    // Icono Ancla
    import AnchorIcon from "../assets/img/icons/Anchor.png";

    // Icono Menú
    import MenuIcon from "../assets/img/icons/Menu.png";

    // Icono Home
    import HomeIcon from "../assets/img/icons/Home.png";

    // Icono Cuadros Marineros
    import SailorPaintingsIcon from "../assets/img/icons/SailorPaintings.png";

    // Icono Botes 
    import SailorBoatsIcon from "../assets/img/icons/SailorBoats.png";
    
    // Icono Contáctanos
    import ContactUsIcon from "../assets/img/icons/ContactUs.png";

const Header = () => {
    // Creación estado para menú
    const [navMenu, setNavMenu] = useState(false);

    // Función para cambiar estado de menú
    const handleNavMenu = () => {
        setNavMenu(!navMenu);
    }

    // Hook para desactivar menú cuando el usuario haga cierta cantidad de scroll
    useEffect(() => {
        const handleScrollNavMenu = () => {
            const scrollThreshold = 200; // Cantidad de Scroll
            if (window.scrollY > scrollThreshold && navMenu) {
                setNavMenu(false);
            }
        };
    
        window.addEventListener('scroll', handleScrollNavMenu); // Adición Evento de Scroll
    
        return () => {
            window.removeEventListener('scroll', handleScrollNavMenu);
        };
    }, [navMenu]);    

    return(
        <>
            <header className="header">
                <nav className="nav-company">
                    <Link to="/">
                        <img src={AnchorIcon} alt="Icono Ancla" />
                        <h1>Cuadros Marineros Edua</h1>
                    </Link>
                </nav>
                <nav className="nav-btn-menu">
                    <button className="btn-menu" onClick={handleNavMenu}>
                        <img src={MenuIcon} alt="Icono Menú" />
                    </button>
                </nav>
                <nav className={ `nav-menu ${navMenu ? "active" : ""}` }>
                    <li className="item-nav-menu"><Link to="/"><img src={HomeIcon} alt="Icono Inicio" />Inicio</Link></li>
                    <li className="item-nav-menu"><Link to="/cuadros-marineros"><img src={SailorPaintingsIcon} alt="Icono Cuadros Marineros" /> Cuadros Marineros</Link></li>
                    <li className="item-nav-menu"><Link to="/botes-marineros"><img src={SailorBoatsIcon} alt="Icono Botes Marineros" /> Botes Marineros</Link></li>
                    <li className="item-nav-menu"><Link to="/#contact"><img src={ContactUsIcon} alt="Icono Contáctanos" /> Contáctanos</Link></li>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export { Header };