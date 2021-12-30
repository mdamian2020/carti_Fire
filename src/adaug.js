import React, { useState } from "react";
import { Form, Container, Button } from 'react-bootstrap';

const Adaug = (props) => {
    const [src, setSrc] = useState("");
    const [titlu, setTitlu] = useState("");
    const [text, setText] = useState("");
    const [autor, setAutor] = useState("");
    const [pret, setPret] = useState("");

    const tratezSubmit = (evt) => {
        evt.preventDefault();
        const carte = {
          src,
          titlu,   //  scriere simplificata pentru titlu: titlu
          text,
          autor, 
          pret
        };
        props.transmit(carte);  //  Transmit spre <App /> obiectul carte 
        //  Golesc controalele formularului
        setSrc("");
        setTitlu("");
        setText("");
        setAutor("");
        setPret("");
      }

    const stil = {
        marginTop: "2rem",
        backgroundColor: "#ddd",
        padding: "20px",
        width: "750px",
    }

    return (
    <Container style={stil}>
        <Form onSubmit={tratezSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Titlul:</Form.Label>
            <Form.Control type="text" value={titlu}
                    onChange={e => setTitlu(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Denumire imagine:</Form.Label>
              <Form.Control type="text" value={src}
                      onChange={e => setSrc(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Descriere:</Form.Label>
              <Form.Control as="textarea" rows={3} value={text}
                      onChange={e => setText(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Autor:</Form.Label>
              <Form.Control type="text" value={autor}
                      onChange={e => setAutor(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Preț:</Form.Label>
              <Form.Control type="text" value={pret}
                      onChange={e => setPret(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
              Submit
          </Button>

        </Form>
    </Container>
    );
}

export default Adaug;
