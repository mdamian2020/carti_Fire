import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Carte from "./carte";

const ListaCarti = (props) => {
   const lista = props.listaCarti.map(item => {
   return (
      <Col key={item.id}>
        <Carte
            src={item.src}
            titlu={item.titlu}
            text={item.text}
            autor={item.autor}
            pret={item.pret}
        />
      </Col>
    )
   });

    return (
      <Container>
        <Row xs="auto" className="justify-content-sm-center">
          {lista}
        </Row>
      </Container>
    )
}

export default ListaCarti;