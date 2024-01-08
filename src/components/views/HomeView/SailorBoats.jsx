// Navegación entre rutas
import { Link } from "react-router-dom";

// Imágenes - Iconos
    // Bote Marinero 1
    import featuredProductImage1 from "../../../assets/img/featuredProducts/featuredProductImage1.jpg";

    // Icono Ver todos Flecha
    import ArrowRightIcon from "../../../assets/img/icons/ArrowRight.png";

const SailorBoats = () => {
    // Lista de Botes Marineros
    const ListSailorBoats = [
        {
            id: 1,
            image: featuredProductImage1,
            title: "Bote Marinero 1",
            description: "Bote Marinero 1"
        },
        {
            id: 2,
            image: featuredProductImage1,
            title: "Bote Marinero 2",
            description: "Bote Marinero 2"
        },
        {
            id: 3,
            image: featuredProductImage1,
            title: "Bote Marinero 3",
            description: "Bote Marinero 3"
        },
        {
            id: 4,
            image: featuredProductImage1,
            title: "Bote Marinero 4",
            description: "Bote Marinero 4"
        },
        {
            id: 5,
            image: featuredProductImage1,
            title: "Bote Marinero 5",
            description: "Bote Marinero 5"
        },
        {
            id: 6,
            image: featuredProductImage1,
            title: "Bote Marinero 6",
            description: "Bote Marinero 6"
        },
        {
            id: 7,
            image: featuredProductImage1,
            title: "Bote Marinero 7",
            description: "Bote Marinero 7"
        },
        {
            id: 8,
            image: featuredProductImage1,
            title: "Bote Marinero 8",
            description: "Bote Marinero 8"
        },
    ];
    
    return(
        <div className="content-section">
            {ListSailorBoats.map((product) => (
                <div className="item-prod" key={product.id}>
                    <div className="cont-img-item-prod">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="cont-text-item-prod">
                        <h2><Link>{product.title}</Link></h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            ))}

            {/* Botón: Ver todos */}
            <div className="cont-btn-go-to-all">
                <button className="btn-go-to-all">
                    <Link to="botes-marineros">
                        <h2>Ver todos</h2>
                        <img src={ArrowRightIcon} alt="" />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export { SailorBoats };