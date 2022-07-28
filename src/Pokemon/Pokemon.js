import {React, useEffect, useState} from "react"
import Input from '../Elementos/Input/Input'
import Button from '../Elementos/Button/Button'
import './Pokemon.css'



const Pokemon = (props) => {

    const [responseServer, setResponseServer] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [pokemon, setPokemon] = useState('')
    const [pokemonInput, setPokemonInput] = useState('')
    const [radioButton, setRadioButton] = useState('Version Normal')
    const [urlPokemonNormalFront, setUrlPokemonNormalFront] = useState('')
    const [urlPokemonNormalBack, setUrlPokemonNormalBack] = useState('')
    const [urlPokemonShinyFront, setUrlPokemonShinyFront] = useState('')
    const [urlPokemonShinyBack, setUrlPokemonShinyBack] = useState('')
    const [urlPokemonFemaleFront, setUrlPokemonFemaleFront] = useState('')
    const [urlPokemonFemaleBack, setUrlPokemonFemaleBack] = useState('')
    const [estadisticas, setEstadisticas] = useState([])
    
    useEffect ( () => {
        async function obtenerPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            if (response.ok) {
                const data = await response.json()

                setPokemonData(data)
                setResponseServer(response.status)

                setUrlPokemonNormalFront(data.sprites.front_default)
                setUrlPokemonNormalBack(data.sprites.back_default)

                setUrlPokemonShinyFront(data.sprites.front_shiny)
                setUrlPokemonShinyBack(data.sprites.back_shiny)

                setUrlPokemonFemaleFront(data.sprites.front_female)
                setUrlPokemonFemaleBack(data.sprites.back_female)

                setEstadisticas(data.stats.map(s => (s.stat.name + ': ' + s.base_stat + '')))


            } else {
                setResponseServer(response.status)
            }
        }    
        obtenerPokemon()
    }, [pokemon])

    const handleChange = (e) => {
        setPokemonInput(e.target.value)
    }

    const handleClick = () => {
        setPokemon(pokemonInput)
    }

    const handleRadio = (e) => {
        setRadioButton(e.target.value)
    }

    let 
    url1, 
    url2, 
    descript, 
    ocultarR1,
    ocultarR2,
    ocultarR3
    
    if (urlPokemonNormalBack === null || urlPokemonNormalFront === null) {
        ocultarR1 = true
    } else {
        ocultarR1 = false
        if (radioButton === 'Version Normal') {
            url1 = urlPokemonNormalFront
            url2 = urlPokemonNormalBack
            descript = 'pokemon normal'
        }
    } 
    
    if (urlPokemonShinyFront === null || urlPokemonShinyBack === null) {
        ocultarR2=true
    } else {
        ocultarR2=false

        if (radioButton === 'Version Shiny') {
            url1 = urlPokemonShinyFront
            url2 = urlPokemonShinyBack
            descript = 'pokemon shiny'
        } 
    }

    if (urlPokemonFemaleFront === null || urlPokemonFemaleBack === null) {
        ocultarR3=true
    } else {
        ocultarR3=false
        if (radioButton === 'Version Female') {
            url1 = urlPokemonFemaleFront
            url2 = urlPokemonFemaleBack
            descript = 'pokemon female'
        }  
    }

    return (
            <>
                <div className="ctn-search">
                    <Input type="text"  onChange={handleChange} name='Buscar Pokemon'/>
                    <Button onClick={handleClick} name='Buscar'/> 
                </div>
                
                {responseServer === 200 && 
                
                    <div className="ctn-card"> 
                        {pokemonData.name &&
                            
                            <div className="ctn-main">
                                <div className="ctn-img-radiobutton">
                                    <div className="ctn-img">
                                        <img src={url1} alt={descript}></img>
                                        <img src={url2} alt={descript}></img>
                                    </div>
                                    <div className="ctn-radioButton">
                                        <p>{radioButton}</p>
                                        <div className="inputs-radio">
                                            <Input 
                                                checked={radioButton === 'Version Normal' ? true : false} 
                                                onChange={handleRadio}  
                                                value='Version Normal' 
                                                type='radio'
                                                className='radioButtonPokemonNormal'
                                                hidden={ocultarR1}/>
                                            <Input 
                                                checked={radioButton === 'Version Shiny' ? true : false} 
                                                onChange={handleRadio}  
                                                value='Version Shiny' 
                                                type='radio' 
                                                hidden={ocultarR2} />
                                            <Input 
                                                checked={radioButton === 'Version Female' ? true : false} 
                                                onChange={handleRadio}  
                                                value='Version Female' 
                                                type='radio' 
                                                className='radioButtonPokemonFemale'
                                                hidden={ocultarR3}/>
                                        </div>
                                    </div>
                                    <div className="ctn-data-1">
                                        <div className="ctn-name-id"> 
                                            <h1>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h1>
                                        </div>
                                        <p>Tipo: {pokemonData.types[0].type.name} </p>
                                    </div>
                                </div>
                                    
                                <div className="ctn-data-2">
                                    <div className="ctn-caracteristicas">
                                        <label>Caracteristicas:</label>
                                    </div>
                                    <div className="data-2"> 
                                        <p>Peso: {pokemonData.weight}</p>
                                        <p>Altura: {pokemonData.height}</p>
                                        <p>Experiencia: {pokemonData.base_experience}</p>
                                    </div>
                                </div>

                                
                                <div className="ctn-stat">
                                    <label>Stats:</label>
                                    <div className="ctn-estadisticas"> 
                                        <p>{estadisticas[0]}</p>
                                        <p>{estadisticas[1]}</p>
                                        <p>{estadisticas[2]}</p>
                                        <p>{estadisticas[3]}</p>
                                        <p>{estadisticas[4]}</p>
                                    </div> 
                                </div>
                                <div className="ctn-habilidades">
                                    <label>Habilidades:</label>
                                    <p>{pokemonData.abilities.map(e => ((e.ability.name + ' ' )))}</p>
                                </div>
                            </div>
    
                        } {!pokemonData.name && 
                            <label className="mensaje-input-white">Ingrese una busqueda.</label>
                        }
                    </div>
                    
                } {responseServer === 404 && <label className="mensaje-response-null">Pokemon no existe.</label>}
            
            </> 
    )
}

export default Pokemon;