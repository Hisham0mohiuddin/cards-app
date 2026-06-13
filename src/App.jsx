import { useState ,useEffect} from 'react'
import  TopBar  from "./components/TopBar";
import './App.css'

function App() {
  const [maxPts, updatemaxPts] = useState(0);
  const [crntPts,updatecrntPts]  = useState(0);
  const [pokemon,setpokemon] = useState([]);


  useEffect(() => {
    async function load() {
      let fetchedPokemon = [];
  
      for (let index = 0; index < 12; index++) {
        const id = Math.floor(Math.random() * 151) + 1;
  
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const data = await response.json();
  
        fetchedPokemon.push({
          id: data.id,
          name: data.name,
          img: data.sprites.front_default,
        });
      }
  
      setpokemon(fetchedPokemon); // ✅ once here
    }
  
    load();
  }, []);

  

  return (<> 
    <TopBar maxp = {maxPts} crntp = {crntPts}></TopBar>
    <div className="cards">
        {pokemon.map((poke)=>(
          <div className="pokemon" key = {poke.id}> {poke.name}</div>
        ))}
    </div>
    
  </>);
}

export default App
