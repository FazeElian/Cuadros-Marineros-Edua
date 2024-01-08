// Estilos para este componente
import "../../../assets/css/components/HomeView/ProductsGallery.css";

import { useState } from "react";

// Componentes para este componente Productos
    // Cuadros Marineros
    import { SailorPaintings } from "./SailorPaintings";

    // Botes Marineros
    import { SailorBoats } from "./SailorBoats";

const ProductsGallery = () => {
    // Creación estados de Cuadros Marineros
    const [ sailorPaintings, setSailorPaintings ] = useState(true);

    // Función para mostrar Cuadros marineros y ocultar Botes marineros
    const showSailorPaintings = () => {
        setSailorPaintings(true)
        setSailorBoats(false)
    }

    const [ sailorBoats, setSailorBoats ] = useState(false);

    // Función para mostrar Boted marineros y ocultar Cuadros marineros
    const showSailorBoats = () => {
        setSailorPaintings(false)
        setSailorBoats(true);
    }

    return(
        <div className="cont-section">
            <div className="cont-title-section">
                <div className={ `title-cont-section title-mg title-click--content ${sailorBoats ? "title-not-selected" : "selected"}` } onClick={showSailorPaintings}>Cuadros Marineros</div>
                <div className={ `title-cont-section title-mg title-click--content ${sailorBoats ? "selected" : "title-not-selected"}` } onClick={showSailorBoats}>Botes Marineros</div>
            </div>
            {sailorPaintings ? (<SailorPaintings />): true}
            {sailorBoats ? (<SailorBoats />): true}
        </div>
    )
}

export { ProductsGallery };