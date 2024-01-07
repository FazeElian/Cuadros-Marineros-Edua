// Navegación entre rutas
import { Link } from "react-router-dom";

// Links con Scroll
import { Element } from "react-scroll";

// Estilos para este componente
import "../../../assets/css/components/HomeView/ProductsGallery.css";

// Imágenes - Iconos
    // Producto Destacado 1
    import featuredProductImage1 from "../../../assets/img/featuredProducts/featuredProductImage1.jpg";

    // Producto Destacado 2
    import featuredProductImage2 from "../../../assets/img/featuredProducts/featuredProductImage2.jpg";

    // Producto Destacado 3
    import featuredProductImage3 from "../../../assets/img/featuredProducts/featuredProductImage3.jpg";

    // Producto Destacado 4
    import featuredProductImage4 from "../../../assets/img/featuredProducts/featuredProductImage4.jpg";

const FeaturedProducts = () => {
    // Lista de Productos Destacados
    const ListFeaturedProducts = [
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
    ];

    return(
        <>
            <Element className="cont-section" name="featured-products-section">
                <div className="cont-title-section">
                    <div className="title-cont-section">Productos más destacados</div>
                </div>
                <div className="content-section">
                    {ListFeaturedProducts.map((product) => (
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
            </Element>
        </>
    )
}

export { FeaturedProducts };