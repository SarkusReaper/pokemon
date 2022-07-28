import { useState } from 'react'
import Input from '..//Elementos//Input//Input'
import Button from '..///Elementos///Button////Button'

function BuscadorCombate(props) {

    const [busqueda, setBusqueda] = useState('')

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            console.log(event.key)
            event.preventDefault()
            setBusqueda(event.target.value)
            if (busqueda === '') {
                return alert('Pokemon no existe o campo vacio.')
            }
        }
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        setBusqueda(event.target.value)
        if (busqueda === '') {
            return alert('Pokemon no existe o campo vacio.')
        }
        props.getPokemonTwo(busqueda.toLowerCase())
    }

    return (
        <>
            <div onChange={(e) => setBusqueda(e.target.value)}>
                <div className='ctn-search search-combate'>
                    <Input onChange={handleKeyDown} type="text" name='Elije a tu Pokemon' required />
                    <Button onClick={handleOnClick} type="submit" name="Pelea!" />
                </div>
            </div>
        </>
    )
}

export default BuscadorCombate