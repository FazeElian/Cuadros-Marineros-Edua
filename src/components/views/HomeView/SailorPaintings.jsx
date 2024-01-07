// Estilos para este componente
import "../../../assets/css/components/HomeView/ProductsGallery.css";

// Navegación entre rutas
import { Link } from "react-router-dom";

// Imágenes - Iconos
    // Cuadro Marinero 1
    import featuredProductImage1 from "../../../assets/img/featuredProducts/featuredProductImage1.jpg";

    // Cuadro Marinero 2
    import featuredProductImage2 from "../../../assets/img/featuredProducts/featuredProductImage2.jpg";

    // Cuadro Marinero 3
    import featuredProductImage3 from "../../../assets/img/featuredProducts/featuredProductImage3.jpg";

    // Cuadro Marinero 4
    import featuredProductImage4 from "../../../assets/img/featuredProducts/featuredProductImage4.jpg";

const SailorPaitings = () => {
    // Lista de Cuadros Marineros
    const ListSailorPaintings = [
        {
            id: 1,
            image: featuredProductImage1,
            title: "Buque ARC Barranquilla",
            description: "Descripción Producto 1"
        },
        {
            id: 2,
            image: featuredProductImage2,
            title: "Cuadro Marinero Vintage",
            description: "Descripción Producto 2"
        },
        {
            id: 3,
            image: featuredProductImage3,
            title: "Bote Marinero Infantería de Marina",
            description: "Descripción Producto 3"
        },
        {
            id: 4,
            image: featuredProductImage4,
            title: "Cuadro Marinero Simple",
            description: "Descripción Producto 4"
        },
        {
            id: 5,
            image: featuredProductImage4,
            title: "Cuadro 5",
            description: "Descripción Producto 5"
        },
        {
            id: 6,
            image: featuredProductImage4,
            title: "Cuadro 6",
            description: "Descripción Producto 6"
        },
        {
            id: 7,
            image: featuredProductImage4,
            title: "Cuadro 7",
            description: "Descripción Producto 7"
        },
        {
            id: 8,
            image: featuredProductImage4,
            title: "Cuadro 8",
            description: "Descripción Producto 8"
        },
    ];

    return(
        <div className="cont-section">
            <div className="cont-title-section">
                <div className="title-cont-section title-mg title-click--content">Cuadros Marineros</div>
                <div className="title-cont-section title-mg title-click--content title-not-selected">Botes Marineros</div>
            </div>
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
            </div>
        </div>
    )
}

export { SailorPaitings };