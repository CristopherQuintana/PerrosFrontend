import { Route, Routes } from "react-router-dom";
import VerPerro from "./src/Pages/VerPerro";
import EditPerro from "./src/Pages/EditPerro";
import CreatePerro from "./src/Pages/CreatePerro"
import CandidatosPerros from "./src/Pages/CandidatosPerros";
import InteresadosPerros from "./src/Pages/InteresadosPerros";
import ListaPerrosAceptados from "./src/Pages/ListaPerrosAceptados"
import ListaPerrosRechazados from "./src/Pages/ListaPerrosRechazados";
import Inicio from "./src/Pages/Inicio";

function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/CreatePerro" element={<CreatePerro/>}/>
            <Route path="/VerPerro/:id" element={<VerPerro />} /> 
            <Route path="/EditPerro/:id" element={<EditPerro />}/>
            <Route path="/InteresadosPerros/:id" element={<InteresadosPerros/>}/>     
            <Route path="/CandidatosPerros/:id" element={<CandidatosPerros />} />  
            <Route path="/ListaPerrosAceptados/:id" element={<ListaPerrosAceptados />}/>
            <Route path="/ListaPerrosRechazados/:id" element={<ListaPerrosRechazados/>}/>
        </Routes>
    )
}

export default RouterApp