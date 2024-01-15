
const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {


    const handleEliminar = () =>{
        const confirmar = confirm("Deseas eliminar al paciente?");
        if(confirmar){
            eliminarPaciente(paciente.id)
        }
    }

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{paciente.nombreMascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
            <span className="font-normal normal-case">{paciente.propietarioName}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Cita: {''}
            <span className="font-normal normal-case">{paciente.altaDate}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

        <div>
            <button type="button" 
                    className="py-2 px-10 mr-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase"
                    onClick={() => setPaciente(paciente)}>
                    Editar
            </button>
            <button type="button" 
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase"
                    onClick={handleEliminar}>
                    Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente