const Actualizar_hoja_filiacion = () => {
    return (
        <div>
            <center><h3>DATOS GENERALES</h3></center>
            <div className="container mb-1">
                <div className="row mb-1">
                    <label className="col-2">Apellidos:</label>
                    <input className="col-5"></input>
                    <label className="col-2">N° Historia clinica:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Nombres:</label>
                    <input className="col-5"></input>
                    <label className="col-2">Sexo:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Fecha de nacimiento:</label>
                    <input className="col-5"></input>
                    <label className="col-2">Tipo de seguro:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Estado civil:</label>
                    <input className="col-5"></input>
                    <label className="col-2">DNI:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1"> 
                    <label className="col-2">Nombre del padre:</label>
                    <input className="col-5"></input>
                    <label className="col-2">Fallecido:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Nombre de la madre:</label>
                    <input className="col-5"></input>
                    <label className="col-2">Fallecido:</label>
                    <input className="col-3"></input>
                </div>


                <center><h3>DATOS PERSONALES</h3></center>
                <div className="row mb-1"> 
                    <label className="col-2">Departamento:</label>
                    <input className="col-5"></input>
                    <label className="col-2">Provincia:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Distrito:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Dirección:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Localidad:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Sector:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Referencia:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">N° Teléfono:</label>
                    <input className="col-5"></input>
                    <label className="col-2">N° Celular:</label>
                    <input className="col-3"></input>
                </div>
            </div>
            <div className="text-center ">
                <button >Actualizar</button>
                <button >Cancelar</button>
            </div>
            
        </div>
    )
}
export default Actualizar_hoja_filiacion;