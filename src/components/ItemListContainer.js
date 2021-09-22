import { Container, Row } from "react-bootstrap";

const ItemListContainer = ({ grettings }) => {
  return (
    <Container>
      <Row>
        <h1>{grettings}</h1>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
