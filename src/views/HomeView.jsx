// Componentes de vista
    // Encabezado de App
    import { Header } from "../components/Header";

    // Banner de Bote
    import { BoatBanner } from "../components/views/HomeView/BoatBanner";
        
const HomeView = () => {
    return(
        <>
            {/* Componente de encabezado de App */}
            <Header />

            {/* Componente Banner Bote */}
            <BoatBanner />
        </>
    )
}

export { HomeView };