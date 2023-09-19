import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes,setPaciente}) => {

  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

        { pacientes && pacientes.length > 0 ? (
          <>
         <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
         <p className="text-lg mt-5 text-center mb-10">Administra tus {""}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
         </p>
        {/* A ListadoPacientes en app.jsx le pasamos primero el state de pacientes que contiene todos los objetos de clientes creados, luego en este archivo llamamos la prop destructurada de pacientes
        e iteramos sobre ese arreglo y por cada paciente (objeto de paciente) le diremos que imprima el componente paciente el cual tambien le pasaremos los valores de paciente por medio de props*/}
          {pacientes.map( paciente => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}         
          </>
          ) : 
          <>
         <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
         <p className="text-lg mt-5 text-center mb-10">Comienza agregando pacientes {""}
          <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
         </p>          
          </>
          }


        
         
    </div>

  )
}

export default ListadoPacientes