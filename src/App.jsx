/* eslint-disable no-unused-vars */
import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const titleHeader = 'Seguimientos pacientes'
  const readFromHeader = (valor) =>{
    // console.log(valor);
  }

  //useEffect sin segundo parametro se ejecuta una sola vez
  useEffect( () => {

    const setLS = () =>{
          //Convertimos el string de local storage en un arreglo con JSON.parse
          //La sintaxis '??' funciona como un 'sino, entonces' en caso de que no haya nada en local storage, entonces sera un objeto vacio
          const pacienteLS = JSON.parse(localStorage.getItem('Pacientes')) ?? []
          setPacientes(pacienteLS)
    }

    setLS();

  }, [])

  useEffect( () => {
    //Local Storage solo guarda string, por lo que tenemos que convertir el arreglo 'Pacientes' en un string
    //JSON.stringify convierte a string
    localStorage.setItem('Pacientes', JSON.stringify(pacientes))
  } , [pacientes])

  const eliminarPaciente = (id) =>{

    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id)

    setPacientes(pacientesActualizados);

  }

  return (
    <>
      <div className="container mx-auto mt-2">
        <Header 
           //props
           readFromHeader={readFromHeader}
           titleHeader={titleHeader}
           subTitleHeader = {'Veterinaria'}
        />
        <section className="md:flex mt-12">
          <Formulario 
             //props
             pacientes={pacientes}
             setPacientes={setPacientes}
             paciente={paciente}
             setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente} />
        </section>
      </div>
    </>
  )
}

export default App
