import React, { useState } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HojaAF from "../CrearHojaPersonal"

import axios from 'axios';

const Modal1 = () => {

  const [abierto, setAbierto] = useState(false)
  const [pacienteBody, setPacienteBody] = useState({
    num_documento: null,
    apellidos: null,
    nombres: null,
    fecha_nacimiento: null,
    estado_civil: null,
    nombre_padre: null,
    nombre_madre: null,
    num_hist_cli: null,
    sexo: null,
    tipo_seguro: null,
    fallecido_padre: null,
    fallecido_madre: null,
    departamento: null,
    provincia: null,
    distrito: null,
    direccion: null,
    localidad: null,
    sector: null,
    referencia: null,
    telefono: null,
    celular: null
  })

  const abrirModal = () => {
    setAbierto(true);
  }
  const cerrarModal = () => {
    datos()
    setAbierto(false);
  }

  const datos = () => {

    console.log(pacienteBody)

    axios.post(`/hojasFiliacion`, {
      num_documento: pacienteBody.num_documento,
      apellidos: pacienteBody.apellidos,
      nombres: pacienteBody.nombres,
      fecha_nacimiento: pacienteBody.fecha_nacimiento,
      estado_civil: pacienteBody.estado_civil,
      nombre_padre: pacienteBody.nombre_padre,
      nombre_madre: pacienteBody.nombre_madre,
      num_hist_cli: pacienteBody.num_hist_cli,
      sexo: pacienteBody.sexo,
      tipo_seguro: pacienteBody.tipo_seguro,
      fallecido_padre: pacienteBody.fallecido_padre,
      fallecido_madre: pacienteBody.fallecido_madre,
      departamento: pacienteBody.departamento,
      provincia: pacienteBody.provincia,
      distrito: pacienteBody.distrito,
      direccion: pacienteBody.direccion,
      localidad: pacienteBody.localidad,
      sector: pacienteBody.localidad,
      referencia: pacienteBody.referencia,
      telefono: pacienteBody.telefono,
      celular: pacienteBody.celular,
    }).then(res => {
      console.log("MIRA")
      console.log(res.data);

    }).catch(console.log)
  }


  const modalStyles = {
    position: "absolute",
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400 px',
    height: '10%'

  }

  return (

    <>
      <div className="principal">
        <div className="secundario">
          <Button color="primary" onClick={abrirModal}>Registro Por Personal</Button>
          <Modal isOpen={abierto} style={modalStyles} >
            <ModalFooter>
              <HojaAF pacBody={pacienteBody} setPacBody={setPacienteBody} />
              <Button href="" color="primary" onClick={cerrarModal}>Crear Hoja de Afiliados</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Modal1;

