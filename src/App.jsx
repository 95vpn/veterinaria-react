import { useEffect } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';

function App() {
  
  const url = 'https://data-base-veterinaria.onrender.com/api/v1';

  const [pets, getPets, createPets, deletePets, updatePets] = useCrud(url);

  useEffect(() => {
    getPets('/pets');
  }, [])
  
  console.log(pets)

  return (
    <div>
      <h1>formulkario veterinaria</h1>
      <FormUser
        createPets={createPets}
      />
    </div>
  )
}

export default App;
