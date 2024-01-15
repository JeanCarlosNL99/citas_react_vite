import Paciente from "./Paciente"

function ListadoPacientes ({pacientes, setPaciente, eliminarPaciente}){

    return (
        <div className="md:w-3/5 md:h-screen overflow-y-auto">

            {
                //Si pacientes.length > 0
                pacientes.length > 0 ? 
                (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                        <p className="text-center text-lg mt-3"> Administra tus {''}
                            <span className="font-bold text-indigo-600">Pacientes y citas</span> 
                        </p>

                        {
                            pacientes.map((paciente) => {

                                return (
                                    <Paciente 
                                        //a la hora de iterar un component con una lista, debemos añadir un key prop
                                        key={paciente.id}
                                        paciente={paciente}
                                        setPaciente={setPaciente}
                                        eliminarPaciente={eliminarPaciente}/>
                                )
                            })
                        }
                    </>
                )
                :

                (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes registrados</h2>

                        <p className="text-center text-lg mt-3"> Registra nuevos pacientes {''}
                            <span className="font-bold text-indigo-600">Para poder administrarlos</span> 
                        </p>
                    </>
                )
            }

           

        </div>
    )
}

export default ListadoPacientes