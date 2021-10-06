import React, {useState} from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = (item) => {

const [qAdd, setQadd] = useState(0)

const {imagen, titulo, texto, price} = item

const onAdd = (e) =>{
    setQadd(e)
}

    return(
        <div>
            <div className="container ">
                <div className="row">
                    
                    <Card className="col-sm-6">
                            <Card.Body>
                                <Card.Img src={imagen}/>
                            </Card.Body>
                    </Card>

                    <Card className="col-sm-6">
                            <Card.Body>
                                <Card.Title>{titulo}</Card.Title>
                                <Card.Text>{texto}</Card.Text>
                               
                               

                                {qAdd > 0 ?  <Link to='/cart'><button id="compra" className="m-1 btn btn-primary sm">Comprar</button></Link> : <div> <ItemCount stock={price} onAdd={onAdd}/> </div>}

                            </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );

} 


export default ItemDetail;