import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    // funcionamiento de los botones
    function addToCount() {
        
        let newCantidad = parseInt(cantidad) +1
        setCantidad(newCantidad)
    }
    function lessToCount() {
    
        let newCantidad = parseInt(cantidad) -1
        setCantidad(newCantidad)
    }
    
    return(
        <div>
            <div>
                <button
                onClick={() => lessToCount()}
                disabled={cantidad<=initial}>-</button>
                {cantidad}
                <button
                onClick={() => addToCount()}
                disabled={cantidad>=stock}>+</button>
                <button className="m-1"type="submit" onClick={() => onAdd(cantidad)} value={cantidad}>Agregar al Carro</button>
            </div>
           
        </div>
    )
}
export default ItemCount