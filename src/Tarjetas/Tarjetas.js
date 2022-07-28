import './Tarjetas.css'

function Tarjetas({ cod, 
                    nombre, 
                    imagenfrontal, 
                    tipo, 
                    peso, 
                    altura,
                    exp_base}) {

    return (

    <div className='ctn-tarjeta'>
        <div className='tarjeta'>
            <div className='ctn-tarjeta-img'>
                <img src={imagenfrontal} alt={nombre} />
            </div>
            <div className='ctn-tarjeta-info'>

                <div className='titulo'>
                    <h1>{nombre}</h1>
                </div>

                <div className='ctn-info'> 
                    <div className='info'>
                    <label>Tipo:</label>
                    <p>{tipo}</p>
                    </div>

                    <div className='info'>
                    <label>Peso:</label>
                    <p>{peso}</p>
                    </div>

                    <div className='info'>
                    <label>Altura:</label>
                    <p>{altura}</p>
                    </div>

                    <div className='info'>
                    <label>Experiencia base:</label>
                    <p>{exp_base}</p>
                    </div>
                </div>
                

            </div>
        </div>
    </div>

    )
}

export default Tarjetas

