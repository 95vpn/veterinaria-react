import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css'



const FormUser = ({ createPets, editUser, updatePets, setEditUser, isOpen, setIsOpen }) => {

    

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        reset(editUser)
    }, [editUser]);
    

    const submit = (data) => {
        if (editUser) {
            updatePets('/pets', editUser.id, data);
            setEditUser();
        } else {
            createPets('/pets', data);
        }

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
        });
        setIsOpen(false);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className={`form__background ${isOpen && 'able'}`}>
            <form className='form__container' onSubmit={handleSubmit(submit)}>
                <div className='form__close' onClick={handleClose}><ion-icon name="close-circle-outline"></ion-icon></div>
                <h2 className='form__title'>Nuevo Cliente</h2>
                <div className='form__item'>
                    <label htmlFor="owner_name">owner_name</label>
                    <input {...register('owner_name')} id='owner_name' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="owner_lastName">owner_lastName</label>
                    <input {...register('owner_lastName')} id='owner_lastName' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="address">address</label>
                    <input {...register('address')}  id='address' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="phone">phone</label>
                    <input {...register('phone')} id='phone' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="email">email</label>
                    <input {...register('email')} id='email' type="email" />
                </div>
                <div className='form__item'>
                    <label htmlFor="release_data">date</label>
                    <input {...register('release_data')} id='release_data' type="date" />
                </div>
                <div className='form__item'>
                    <label htmlFor="name">name</label>
                    <input {...register('name')} id='name' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="species">species</label>
                    <input {...register('species')} id='species' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="breed">breed</label>
                    <input {...register('breed')} id='breed' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="age">age</label>
                    <input  {...register('age')} id='age' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="weight">weight</label>
                    <input  {...register('weight')} id='weight' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="vaccinated">vaccinated</label>
                    <input  {...register('vaccinated')} id='vaccinated' type="text" />
                </div>
                <div className='form__item'>
                    <label htmlFor="anamnesicos">anamnesicos</label>
                    <textarea {...register('anamnesicos')} name="anamnesicos" id="anamnesicos"></textarea>
                </div>
                <button className='form__btn'>Submit</button>
            </form>
        </div>
    )
}

export default FormUser;