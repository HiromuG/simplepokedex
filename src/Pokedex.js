import React, { useEffect, useState } from 'react'
import './Pokedex.css'
import PokemonDiv from './PokemonDiv'
import gen1 from './images/gen1.jpg';
import gen2 from './images/gen2.jpg';
import gen3 from './images/gen3.jpg';
import gen4 from './images/gen4.jpg';
import gen5 from './images/gen5.jpg';
import gen6 from './images/gen6.jpg';
import gen7 from './images/gen7.jpg';
import gen8 from './images/gen8.jpg';

function Pokedex() {
    const [pokemon,setPokemon] = useState([]);
    const [gen,setGen] = useState("649&limit=72");
    ///////loading animation
    const [pokedex,showPokedex] = useState('Pokedex');
    const [loader,setLoader]=useState('hideLoader');
    const loading = ()=>{
        showPokedex("hidePokedex");
        setLoader('loader');
    }
    const hideLoading = ()=>{
        showPokedex("Pokedex");
        setLoader('hideLoader');
    }
    ///////loading animation
    const loadingAnimation = ()=>{
        loading();
        setTimeout(()=>{
          hideLoading()
        },3000)
    }
    ///////////////////
    
    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=649&limit=72');
    //         const data = await response.json();
    //         const pokemons = data.results.slice(0,data.results.length).map(items=>items).flat();
            
    //         setPokemon(pokemons);
    //     }
    //     fetchData();
    // },[])
    ///////////////////
    const fetchGenData = async ()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${gen}`);
        let data = null;
        data=await response.json();
        const pokemons = data.results.slice(0,data.results.length).map(items=>items).flat();
        setPokemon(pokemons);
    }
    useEffect(()=>{fetchGenData()})
    /////////////////////////////////////////////////
    const [pokemonIdLength,setPokemonIdLength] = useState(650);
    const handleGen1 = async ()=>{
      setGen("0&limit=151");
      setPokemonIdLength(1);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen2 = async ()=>{
      setGen("151&limit=100");
      setPokemonIdLength(152);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen3 = async ()=>{
      setGen("251&limit=135");
      setPokemonIdLength(252);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen4 = async ()=>{
      setGen("386&limit=107");
      setPokemonIdLength(387);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen5 = async ()=>{
      setGen("494&limit=156");
      setPokemonIdLength(495);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen6 = async ()=>{
      setGen("649&limit=72");
      setPokemonIdLength(650);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen7 = async ()=>{
      setGen("721&limit=88");
      setPokemonIdLength(722);
      fetchGenData();
      loadingAnimation();
    }
    const handleGen8 = async ()=>{
      setGen("809&limit=96");
      setPokemonIdLength(810);
      fetchGenData();
      loadingAnimation();
    }
        
  return (
    <div className='PokedexArea'>
        <div className={loader}></div>
        <div className='generation'>
            <div className='genCircle'>
                <img className='genimg' src={gen1} alt='gen1' onClick={handleGen1}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen2} alt='gen2' onClick={handleGen2}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen3} alt='gen3' onClick={handleGen3}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen4} alt='gen4' onClick={handleGen4}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen5} alt='gen5' onClick={handleGen5}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen6} alt='gen6' onClick={handleGen6}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen7} alt='gen7' onClick={handleGen7}/>
            </div>
            <div className='genCircle'>
                <img className='genimg' src={gen8} alt='gen8' onClick={handleGen8}/>
            </div>
        </div>
        <div className={pokedex}>
            {pokemon.map((pokemonIndex,id)=>{
                return (
                    <PokemonDiv key={id} pokemonIndex={id} pokemonName={pokemonIndex.name} 
                        pokemonUrl={pokemonIndex.url} pokemonIdLength={pokemonIdLength}/>
                )
            })}
        </div>
    </div>
    
  )
}

export default Pokedex