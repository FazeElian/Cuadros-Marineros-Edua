// Estilos para este componente
import "../../../assets/css/components/HomeView/ScrollToFeaturedProducts.css";

// Navegación por scroll
import { Link } from "react-scroll";

// Icono flecha scroll
import ArrowBottomScroll from "../../../assets/img/icons/ArrowBottomScroll.png";

const ScrollToFeaturedProducts = () => {
    return(
        <div className="cont-boat--btn-scroll">
            <Link
                activeClass="active"
                to="featured-products-section"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
            >
                <button className="btn-scroll-boat">
                    <img src={ArrowBottomScroll} alt="Flecha hacia abajo Scroll" />
                </button>
            </Link>
        </div>
    )
}

export { ScrollToFeaturedProducts };