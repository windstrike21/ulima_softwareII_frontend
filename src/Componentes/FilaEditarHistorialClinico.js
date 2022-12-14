import InicioAlEditarHistorialClinico from "./Inicio al editar historial clinico"
import React from 'react';
const FilaEditarHistorialClinico = (props) => {
    return (
        <div className="row mt-3">
            {
                props.tresCitas.map((cita)=>(
                    <InicioAlEditarHistorialClinico nombre={props.nombre} fecha={cita.fecha} especialidad={cita.especialidad} doctor={cita.doctor} diagnostico={cita.diagnostico} cita_id={cita.id} tipo={props.tipo}/>
                ))
            }
            
        </div>
    )
}
export default FilaEditarHistorialClinico;