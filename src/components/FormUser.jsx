import React from 'react';
import { useForm } from 'react-hook-form';



const FormUser = ({ createPets }) => {

    const { handleSubmit, register, reset } = useForm();

    const submit = (data) => {
        createPets('/pets', data)
        reset({
            owner_name:'',
            owner_lastName:'',
            address:'',
            phone:'',
            email:'',
            release_data:'',
            name:'',
            species:'',
            breed:'',
            age:'',
            weight:'',
            vaccinated:'',
            anamnesicos:'',
        })
    }

    return (
        <div>FormUser
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="owner_name">owner_name</label>
                    <input {...register('owner_name')} id='owner_name' type="text" />
                </div>
                <div>
                    <label htmlFor="owner_lastName">owner_lastName</label>
                    <input {...register('owner_lastName')} id='owner_lastName' type="text" />
                </div>
                <div>
                    <label htmlFor="address">address</label>
                    <input {...register('address')}  id='address' type="text" />
                </div>
                <div>
                    <label htmlFor="phone">phone</label>
                    <input {...register('phone')} id='phone' type="text" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input {...register('email')} id='email' type="email" />
                </div>
                <div>
                    <label htmlFor="release_data">date</label>
                    <input {...register('release_data')} id='release_data' type="date" />
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input {...register('name')} id='name' type="text" />
                </div>
                <div>
                    <label htmlFor="species">species</label>
                    <input {...register('species')} id='species' type="text" />
                </div>
                <div>
                    <label htmlFor="breed">breed</label>
                    <input {...register('breed')} id='breed' type="text" />
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input  {...register('age')} id='age' type="text" />
                </div>
                <div>
                    <label htmlFor="weight">weight</label>
                    <input  {...register('weight')} id='weight' type="text" />
                </div>
                <div>
                    <label htmlFor="vaccinated">vaccinated</label>
                    <input  {...register('vaccinated')} id='vaccinated' type="text" />
                </div>
                <div>
                    <label htmlFor="anamnesicos">anamnesicos</label>
                    <textarea {...register('anamnesicos')} name="anamnesicos" id="anamnesicos"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormUser;