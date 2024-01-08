// Navegación entre rutas
import { Link } from "react-router-dom";

// Estilos para este componente
import "../../../assets/css/components/HomeView/BoatBanner.css";

// Imagen de bote de banner
import ImageBoatBanner from "../../../assets/img/image-slider-1.png";

// Componente de botón de scroll a la sección de productos destacados
import { ScrollToFeaturedProducts } from "./ScrollToFeaturedProducts";

const BoatBanner = () => {
    return (
        <>
            <section className="banner-boat">
                <div className="cont-boat">
                    <img
                        src={ImageBoatBanner}
                        className="image"
                        alt="Imagen Slide"
                    />
                    <div className="info-cont-boat">
                            <h2>Bote Infantería de Marina</h2>   
                            <Link to="botes-marineros/bote-infanteria-marina">
                                Vamos a verlo !
                            </Link> 
                    </div>
                </div>
            </section>

            <ScrollToFeaturedProducts />
        </>
    );
};

export { BoatBanner };