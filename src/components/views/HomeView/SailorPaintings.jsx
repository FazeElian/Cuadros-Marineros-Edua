// Navegación entre rutas
import { Link } from "react-router-dom";

// Imágenes - Iconos
    // Cuadro Marinero 1
    import featuredProductImage1 from "../../../assets/img/featuredProducts/featuredProductImage4.jpg";

    // Icono Ver todos Flecha
    import ArrowRightIcon from "../../../assets/img/icons/ArrowRight.png";

const SailorPaintings = () => {
    // Lista de Cuadros Marineros
    const ListSailorPaintings = [
        {
            id: 1,
            image: featuredProductImage1,
            title: "Cuadro Marinero 1",
            description: "Descripción Cuadro Marinero 1"
        },
        {
            id: 2,
            image: featuredProductImage1,
            title: "Cuadro Marinero 2",
            description: "Descripción Cuadro Marinero 2"
        },
        {
            id: 3,
            image: featuredProductImage1,
            title: "Cuadro Marinero 3",
            description: "Descripción Cuadro Marinero 3"
        },
        {
            id: 4,
            image: featuredProductImage1,
            title: "Cuadro Marinero 4",
            description: "Descripción Cuadro Marinero 4"
        },
        {
            id: 5,
            image: featuredProductImage1,
            title: "Cuadro Marinero 5",
            description: "Descripción Cuadro Marinero 5"
        },
        {
            id: 6,
            image: featuredProductImage1,
            title: "Cuadro Marinero 6",
            description: "Descripción Cuadro Marinero 6"
        },
        {
            id: 7,
            image: featuredProductImage1,
            title: "Cuadro Marinero 7",
            description: "Descripción Cuadro Marinero 7"
        },
        {
            id: 8,
            image: featuredProductImage1,
            title: "Cuadro Marinero 8",
            description: "Descripción Cuadro Marinero 8"
        },
    ];
    
    return(
        <div className="content-section">
            {ListSailorPaintings.map((product) => (
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
                    <Link to="cuadros-marineros">
                        <h2>Ver todos</h2>
                        <img src={ArrowRightIcon} alt="" />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export { SailorPaintings };