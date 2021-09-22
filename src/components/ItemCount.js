import React, { useState } from "react";
import { Container, Row, Button, Card } from "react-bootstrap";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);

  const addCount = () => {
    if (stock > 1 && count <= stock) {
      const counter = count + 1;
      setCount(counter);
    }
  };

  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://placeimg.com/640/480/animals" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button onClick={addCount}>+</Button>
            {count}

            <Button onClick={() => setCount(count - 1)} disabled={count <= 0}>
              -
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ItemCount;
