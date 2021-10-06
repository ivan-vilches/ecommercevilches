import React, { useEffect, useState } from "react";
import { getDataID } from "./getItems";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailsContainer() {
  const [curso, setCurso] = useState([]);

  const id = useParams();

  useEffect(() => {
    const data = async () => {
      const sata = await getDataID(id);
      setCurso(sata);
    };
    data([]);
  }, [id]);

  return (
    <div>
      {
        <ItemDetail
          imagen={curso.image}
          titulo={curso.tittle}
          texto={curso.text}
        ></ItemDetail>
      }
    </div>
  );
}

export default ItemDetailsContainer;
