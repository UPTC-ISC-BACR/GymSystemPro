import React from "react"
import {useForm} from "react-hook-form"



const CreateUser = ()=>{
  
  const{register, handleSubmit, formState: { errors }} = useForm()

  const custonSubmit = (data) =>{
    console.log(data);
  }

  return(
    <>
    <h1>Registro Usuario</h1>

    <form onSubmit={handleSubmit(custonSubmit)}>
      <div>
        <select {...register("type_document")}  >
          <optgroup>
            <option value="CC" >Cedula</option>
            <option value="TI">Tarjeta de identidad</option>
            </optgroup>
        </select>
      </div>

      <div>
        <label>Documento</label>
        <input type="number" {...register("document", {required: true})}/>
      </div>

      <div>
        <label>Nombres</label>
          <input type="text" {...register("name", {required: true})} />
          {errors.name?.type === "required" && <small>campo obligatorio</small>}
      </div>
      
      <div>
        <label>Apellidos</label>
          <input type="text" {...register("last_name", {required: true})} />
          {errors.last_name?.type === "required" && <small>campo obligatorio</small>}
      </div>

      <div>
        <label>Fecha de Nacimiento</label>
        <input type="date" {...register("date_of_birth", {required: true , valueAsDate: true,})}/>
        {errors.date_of_birth?.type === "required" && <small>campo obligatorio</small>}
      </div>

      <div>
        <label>Correo:</label>
        <input type="email" {...register("email", {required: true}) }/>
        {errors.email?.type === "required" && <small>campo obligatorio</small>}
      </div>

      <div>
        <label>Telefono</label>
        <input type="number" {...register("cell_phone", {required: true})}/>
        {errors.number?.type === "required" && <small>campo obligatorio</small>}
      </div>

      <div>
      <label >sex:</label>
        <select {...register("sex")}  >
          <optgroup>
            <option value="F" >Femenino</option>
            <option value="M">Masculino</option>
          </optgroup>
        </select>
      </div>

      <button type="submit">Registrar</button>
    </form>
    </>
  )
}
export default CreateUser