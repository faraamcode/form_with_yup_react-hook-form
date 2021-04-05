import react from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email(),
  })
function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = data => console.log(data);
    console.log(watch("username"));
    return (

        <div className="container">

        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">name</label>
            <input type="text" {...register("username", {required : true, maxLength: 4})}/>
            {errors.username ?.message}
            <label htmlFor="">email</label>
            <input type="text" {...register("email")}/>
            {errors.email ?.message}
          <input type="submit" value="submit"/>
        </form>
        </div>
    )
}
export default Form