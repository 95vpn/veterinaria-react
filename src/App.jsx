import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardPet from './components/CardPet';


function App() {

  const [editUser, setEditUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const url = 'https://data-base-veterinaria.onrender.com/api/v1';

  const [pets, getPets, createPets, deletePets, updatePets] = useCrud(url);

  useEffect(() => {
    getPets('/pets');
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <div className='envoltura__fixed'>

        <div className='envoltura'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='container__total'>
        <div className='container__total__header'>
          <h1>Formulario Veterinaria</h1>
          <button onClick={handleOpen}>+ Crear Nuevo Usuario</button>

        </div>
        <div className='container__form_user'>
          <FormUser
            createPets={createPets}
            editUser={editUser}
            updatePets={updatePets}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />

        </div>
        <div className='container__card'>
          {
            pets?.map(pet => (
              <CardPet
                key={pet.id}
                pet={pet}
                deletePets={deletePets}
                setEditUser={setEditUser}
                setIsOpen={setIsOpen}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
