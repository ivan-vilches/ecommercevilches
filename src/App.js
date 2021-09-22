import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = () => {
  return (
    <div>
      <NavBar />;
      <ItemListContainer grettings="Bienvenidos a mi Tienda online" />
      <ItemCount initial={1} stock={5} onAdd={() => console.log("agregado")} />
    </div>
  );
};

export default App;
