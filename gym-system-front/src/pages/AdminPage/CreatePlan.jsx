import React from "react"
import {useForm} from "react-hook-form"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import axios, { personsApi, plansApi } from '../../api/axios'
import SideBar from "../../components/SideBar/SideBar"


const CreatePlan = ()=>{
    const{register, handleSubmit, formState: { errors }} = useForm()
    const MySwal = withReactContent(Swal)

    const custonSubmit = async(data) =>{
        console.log(data);
        await plansApi.post('/add',JSON.stringify(data))
        .then(response=>{
            MySwal.fire({
                title: <p>Plan Creado</p>,
                icon:'success'
        })})
        .catch(error=>console.log('error'))
   
        }
    return(
        <>
        <SideBar/>
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