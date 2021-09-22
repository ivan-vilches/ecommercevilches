import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";

const ItemListContainer = ({ grettings }) => {
  return (
    <Container>
      <Row>
        <h1>{grettings}</h1>
        <ItemList />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
