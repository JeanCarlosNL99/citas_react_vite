import { useState, useEffect } from "react"
import Error from "./Error";

export default function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombreMascota, setNombreMascota] = useState('');
  const [propietarioName, setPropietarioName] = useState('');
  const [email, setEmail] = useState('');
  const [altaDate, setAltaDate] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {

    if (Object.keys(paciente).length > 0){
      setNombreMascota(paciente.nombreMascota)
      setPropietarioName(paciente.propietarioName)
      setEmail(paciente.email)
      setAltaDate(paciente.altaDate)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date

  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    //Validando Formulario

   if([nombreMascota, propietarioName, email, altaDate, sintomas].includes('')){
      setError(true) 
      return
    }
    setError(false)

    //Objeto de Paciente

    const objetoPaciente = {
      nombreMascota,
      propietarioName,
      email,
      altaDate,
      sintomas,
    }

    if(paciente.id) {

      //agregarle id al objeto paciente (el que viene el objeto a editar)
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => {
        return pacienteState.id === paciente.id ? objetoPaciente : pacienteState}
      )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {

      //agregarle id al objeto paciente (nuevo)
      objetoPaciente.id = generarId()

      //debemos agregar los objetos al array pacientes sin modificar el original
      //tomamos la copia del pacientes actual y le agregamos el nuevo objeto
      setPacientes([...pacientes, objetoPaciente])

      //segunda forma
      //Por default se puede acceder a la variable mediante la funcion set del State
      // setPacientes(pacientes => [...pacientes, objetoPaciente])

    }

    // Reiniciar Formulario

    setNombreMascota('')
    setPropietarioName('')
    setEmail('')
    setAltaDate('')
    setSintomas('')

  }

  return (
    <div className="md:w-2/5">
        <h4 className="text-3xl font-black text-center">Seguimiento Pacientes</h4>

        <p className="text-center text-lg mt-3"> Añade pacientes y {''}
          <span className="font-bold text-indigo-600">Administralos</span> 
        </p>

        <form onSubmit={handleSubmit} action="" className="my-5 bg-white shadow-md rounded-md py-9 px-4">

          <div className="mt-5">
              <label htmlFor="mascotaName" className="block text-gray-700 font-bold uppercase">Nombre de la mascota</label>
              <input type="text" name="mascotaName" id="mascotaName" placeholder="Nombre de la mascota"
                     className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-sm"
                     value={nombreMascota} 
                     onChange={(e) => setNombreMascota(e.target.value)}/>
          </div>

          <div className="mt-5">
              <label htmlFor="propietarioName" className="block text-gray-700 font-bold uppercase">Nombre del propietario</label>
              <input type="text" name="propietarioName" id="propietarioName" placeholder="Nombre del propietario"
                     className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-sm" 
                     value={propietarioName} 
                     onChange={(e) => setPropietarioName(e.target.value)}/>
          </div>

          <div className="mt-5">
              <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
              <input type="email" name="email" id="email" placeholder="Email del propietario"
                     className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-sm" 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="mt-5">
              <label htmlFor="altaDate" className="block text-gray-700 font-bold uppercase">Fecha de alta</label>
              <input type="date" name="altaDate" id="altaDate" 
                     className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-sm" 
                     value={altaDate} 
                     onChange={(e) => setAltaDate(e.target.value)}/>
          </div>

          <div className="mt-5">
              <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Sintomas</label>
              <textarea name="sintomas" id="sintomas" placeholder="Describe los sintomas" className="w-full border-1 border-gray-400"
               value={sintomas} 
               onChange={(e) => setSintomas(e.target.value)}/>
          </div>

          {/* { error && "Debe completar todos los campos"} 
            Solo imprimer si es verdadero */}

            {error && <Error mensaje={'Debe completar todos los campos'}/>}
          {/* <span className='text-red-600'>{ error && "Debe completar todos los campos"}</span> */}

          <input type="submit" value={ Object.keys(paciente).length > 0 ? "Editar paciente" : "Agregar paciente" }
          className="bg-indigo-600 rounded-md w-full p-3 mt-5 text-white uppercase font-bold 
                      cursor-pointer hover:bg-indigo-800 transition-colors" />

        </form>
    </div>
  )

}
