import Carousel from "./Carousel"
import ContenidoInferior from "./ContenidoInferior"
import React from "react"
import Header from "./header"
import { useLocation } from "react-router-dom"



const Index = (props) => {
    const location=useLocation()
    return (
        <div>
            <Header tochat={props.tochat} id={location.state.id} tipo={location.state.tipo}  usuario={props.usuario} usuario2={props.usuario2}/>
            <div className="px-4 py-3">
                
                <div className="row py-2 bg-light">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h1 className="text-center mt-2 mb-4">Bienvenido @getusername</h1>
                        <Carousel />
                        <br />
                        <h2 className="text-center mt-3 mb-4">Texto de relleno para la página principal...</h2>
                        <ContenidoInferior />
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>

    )
}
export default Index;