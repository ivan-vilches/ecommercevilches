import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getData} from './getItems'
import {useParams} from 'react-router-dom';

function ItemListcontainer(){
   
    const [curso, setCurso] = useState([]);
    let a = useParams()
    a = a.categoria
        try{ useEffect(() => {
            
            const data = async () => {
                const data = await getData(a);
                setTimeout(() => {
                    const aux = data.map((item) => {
                        return {
                            id: item.id,
                            img: item.image,
                            tittle: item.tittle,
                            text: item.text,
                            price: item.price
                        };
                    });
                    setCurso(aux);
                }, 1000)
            }
            setCurso([])
            data([])
        },[a]);

return(
    <div>
        {curso.length > 0 ? <ItemList curso={curso}></ItemList> :
            <h2><img className="img-fluid"alt="loading" src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"></img></h2>}
    </div>
)
}catch(e){
    console.log(e)
}
   
}

export default ItemListcontainer;