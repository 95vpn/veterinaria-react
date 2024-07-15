import { useEffect } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'

function App() {
  
  const url = 'https://veterinaria-data.onrender.com/api/v1';

  const [pets, getPets, createPets, deletePets, updatePets] = useCrud(url);

  useEffect(() => {
    getPets('/pets/');
  }, [])
  
  console.log(pets)

  return (
    <div>
      <h1>formulkario veterinaria</h1>
    </div>
  )
}

export default App
