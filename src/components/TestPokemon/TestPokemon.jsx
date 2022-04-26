import { useState } from "react";
import {useGetPokemonByNameQuery} from '../../redux/pokemon'
import {Spinner} from "../Spinner/Spinner"


export const TestPokemon = () => {
    const [pokemonName, setPokemonname] = useState('');
    const { data, error, isLoading, isUninitialized, refetch, isFetching, isError } = useGetPokemonByNameQuery(pokemonName, {
        skip: pokemonName === "",
        //pollingInterval: 10000,
        refetchOnFocus: true,

})

    const handleSubmit = e => {
        e.preventDefault();
        setPokemonname(e.currentTarget.elements.pokemonName. value);
        e.currentTarget.reset();
    };
    //console.log('isUninitialized', isUninitialized)
    console.log('isFetching', isFetching)
    console.log('error', error)
    console.log('data', data)
return (

    <>
    <form autoComplete="on" onSubmit={handleSubmit} >
    <input type='text' name='pokemonName' ></input>
    <button type='submit' >Search</button>
    </form>
    <button onClick={refetch} disabled={isUninitialized} >REFETCH</button>

{isError && error.originalStatus === 404 && <p> Ой, нажаль покомона з  іменем <b>{pokemonName}</b> немає :( </p>}

{isFetching && <Spinner/>}

    {data && !isFetching && !isError && <h1>{data.name}</h1>}
    
        
        </>
)

};