import React from "react"
import {useForm} from "react-hook-form"

import axios from '../../api/axios'

const PLANS_URL = 'http://localhost:3000/api/plans/'

const CreatePlan = ()=>{
    const{register, handleSubmit, formState: { errors }} = useForm()

    const custonSubmit = async(data) =>{
        console.log(data);
        try{
          const response = await axios.post(PLANS_URL, JSON.stringify(data));
          console.log(response)
          }catch(error){
            console.error("servidor desconectado");
          }
        }
    return(
        <>
        <h1>Crear Plan</h1>
        <form onSubmit={handleSubmit(custonSubmit)}>
            <div>
                <label>Nombre Plan  {errors.name_plan?.type === "required" && <small className="is-required"></small>}</label>
                <input {...register("name_plan", {required: true})}/> 
            </div>

            <div>
                <label>Precio {errors.price?.type === "required" && <small className="is-required"></small>}</label>
                <input type="number" {...register("price", {required: true})}/>
            </div>

            <div>
                <label>Duracion (meses)  {errors.duration_months?.type === "required" && <small className="is-required"></small>}</label>
                <input type="number" {...register("duration_months", {required: true})}/>
            </div>

            <div id="button">
                <button type="submit">Crear Plan</button>
            </div>
        </form>
        </>
    )
}

export default CreatePlan