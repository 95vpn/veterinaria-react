import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PetPDF from './PetPDF';
import './styles/cardPet.css'

const CardPet = ({ pet, deletePets, setEditUser }) => {

    console.log(pet)
    const handelDelete = () => {
        deletePets('/pets', pet.id);
    }

    const handleEdit = () => {
        setEditUser(pet);
    }

    return (
        <article className='container__card__info'>
            <h3>{pet.owner_name} {pet.owner_lastName}</h3>
            <div>

                <ul className='container__card__owner'>Owner Information
                    <li><span>Address: </span><span>{pet.address}</span></li>
                    <li><span>Phone: </span><span>{pet.phone}</span></li>
                    <li><span>Email: </span><span>{pet.email}</span></li>
                    <li><span>Date: </span><span>{pet.release_data}</span></li>
                </ul>

                <ul className='container__card__pet'>Pet Information
                    <li><span>Name: </span><span>{pet.name}</span></li>
                    <li><span>Species: </span><span>{pet.species}</span></li>
                    <li><span>Breed: </span><span>{pet.breed}</span></li>
                    <li><span>Age: </span><span>{pet.age}</span></li>
                    <li><span>Weight: </span><span>{pet.weigth}</span></li>
                    <li><span>Vaccinated: </span><span>{pet.vaccinated}</span></li>
                    <li><span>Vaccinated: </span><span>{pet.vaccinated}</span></li>
                    <li><span>Anamnesicos</span><span>{pet.anamnesicos}</span></li>
                </ul>
            </div>

            <div className='container__card__info__btn'>
                <button onClick={handelDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
                <PDFDownloadLink document={<PetPDF pet={pet} />} fileName={`${pet.name}_info.pdf`} >
                    {({ loading }) => (
                        <button>
                            {loading ? 'loading document...' : 'Print'}
                        </button>
                    )}
                </PDFDownloadLink>
            </div>


        </article>
    )
}

export default CardPet;