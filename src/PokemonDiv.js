import React, { useEffect, useState } from 'react'
import './PokemonDiv.css'

function PokemonDiv({pokemonIndex,pokemonName,pokemonUrl,pokemonIdLength}) {
  
  const [pokemonZhTWName,setPokemonZhTWName] = useState("");
  const [pokemonType,setPokemonType] = useState("");
  // const [pokemonGenus,setPokemonGenus] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        /////中文名稱
        const speciesUrl = data.species.url;
        const responseSpecies = await fetch(speciesUrl);
        const speciesData = await responseSpecies.json();
        const names = speciesData.names;
        const name = names.find((v)=>v.language.name==="zh-Hant").name;
        setPokemonZhTWName(name);
        /////屬性
        const responseTypes = data.types;
        const typeNumber = responseTypes.length;
        let types="";
        for(let i=0;i<typeNumber;i++){
          const responseType = await fetch(responseTypes[i].type.url);
          const responseTypeData = await responseType.json();
          const responseTypeName = responseTypeData.names;
          const type = responseTypeName.find(v=>v.language.name==="zh-Hant");
          if(i>0){
            types+='/';
          }
          types+=type.name
        }
        setPokemonType(types);
        //////特性
        // const genera = speciesData.genera;
        // const genus = genera.find((v)=>v.language.name==="zh-Hant").genus;
        // setPokemonGenus(genus);
        setLoading(false);
    }
    fetchData();
})
  if (loading) { 
      return (<div>Replace me with a loading component...</div>)
      }
  return (
    <div className='PokemonDiv'>
      <div className='pokemonDesc'>
        <h3 className='pokemonName'>{pokemonZhTWName}</h3>
        <h4 className='pokemonType'>屬性:{pokemonType}</h4>
        {/* <p className='pokemonGenus'>{pokemonGenus}</p> */}
      </div>
      {/* <img className='pokemonImg' alt='' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex+ 810}.png`} /> */}
      <img className='pokemonImg' alt='' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex+pokemonIdLength}.png`} />
    </div>
  )
}

export default PokemonDiv