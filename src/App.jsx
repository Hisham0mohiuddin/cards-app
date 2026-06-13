import { useState ,useEffect} from 'react'
import  TopBar  from "./components/TopBar";
import Cards  from "./components/Cards";
import './App.css'

function App() {
  const [maxPts, updatemaxPts] = useState(0);
  const [crntPts,updatecrntPts]  = useState(0);
  const [pokemon,setpokemon] = useState([]);

  function shuffle(array) {
    const newArr = [...array];
  
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
  
    return newArr;
  }
  function handleClick(index) {
    setpokemon(prev => {
      let updated = [...prev];
  
      if (updated[index].clicked) {
        updatecrntPts(0);
  
        updated = updated.map(p => ({
          ...p,
          clicked: false
        }));
      } else {
        const newScore = crntPts + 1;
        updatecrntPts(newScore);
  
        if (newScore > maxPts) {
          updatemaxPts(newScore);
        }
  
        updated[index] = {
          ...updated[index],
          clicked: true
        };
      }
  
      return shuffle(updated);
    });
  }
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
          clicked: false
        });
      }
  
      setpokemon(fetchedPokemon);
    }
  
    load();
  }, []);

  

  return (<> 
    <TopBar maxp = {maxPts} crntp = {crntPts}></TopBar>
    <div className="cards">
        {pokemon.map((poke,i)=>(
          <Cards 
          id = {poke.id} 
          name = {poke.name} 
          imgsrc ={poke.img} 
          index = {i} 
          onclick = {()=>handleClick(i)}> </Cards>
        ))}
    </div>
    
  </>);
}

export default App
