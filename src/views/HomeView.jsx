// Estilos para esta vista
import "../assets/css/views/HomeView.css";

// Componentes de vista
    // Encabezado de App
    import { Header } from "../components/Header";

    // Banner de Bote
    import { BoatBanner } from "../components/views/HomeView/BoatBanner";

    // Productos más destacados
    import { FeaturedProducts } from "../components/views/HomeView/FeaturedProducts";
        
const HomeView = () => {
    return(
        <>
            {/* Componente de encabezado de App */}
            <Header />

            {/* Componente Banner Bote */}
            <BoatBanner />

            <div className="block-betw-section"></div>

            {/* Componente Productos más destacados */}
            <FeaturedProducts />
            <BoatBanner />

            <BoatBanner />
            <BoatBanner />
            <BoatBanner />
            <BoatBanner />

        </>
    )
}

export { HomeView };