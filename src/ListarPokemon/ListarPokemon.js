import React, {useEffect, useState}  from 'react'
import Tarjetas from '../Tarjetas/Tarjetas'


function ListarPokemon() {

    const [updatePokemones, setUpdatePokemones] = useState([])
    const [cargaPokemones, setCargaPokemones] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

    const getupdatePokemones = async () => {
        const response = await fetch(cargaPokemones)
        const data = await response.json()
        setCargaPokemones(data.next)

        function crearObjetoListaPokemones(resultado) {
            resultado.forEach(async (pokemon) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await response.json()

            setUpdatePokemones(lista => [...lista, data])
            })
        }

        crearObjetoListaPokemones(data.results)

    }

    useEffect(() => {
        getupdatePokemones()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        
        <div className='flex flex-wrap justify-center'>
            {updatePokemones.map((pokemon, idx) => ( 
                <div className='espacio-tarjetas'>
                    <Tarjetas
                        key={idx}
                        cod={pokemon.id}
                        nombre={pokemon.name}
                        imagenfrontal={pokemon.sprites.front_default}
                        tipo={pokemon.types[0].type.name}
                        peso={pokemon.weight}
                        altura={pokemon.height}
                        exp_base={pokemon.base_experience}
                    />
                </div>
            ))}
        </div>
        

    )
}

export default ListarPokemon














































/* const ListarPokemon = () => {

    const [lista, setLista] = useState([]);
    
    useEffect(() => {

        async function fecthPokemons(number) {
            for (let i = 1; i <= number; i++) {
                const pokeresult = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await pokeresult.json();
                setLista(lista => [...lista, data]);
                console.log(lista);
            }
        }
        fecthPokemons(5);


    } , []);

    
    return (
        <>
            <h1>Listar Pokemon</h1>
            <ul>
                {lista.map(pokemon => (
                    <li key={pokemon.index}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </li>
                ))}
            </ul>
        </>   
        
    )

}

export default ListarPokemon; */



