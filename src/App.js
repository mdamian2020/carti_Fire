import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import ListaCarti from "./listacarti";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"; 
import app from "./init";
import Adaug from './adaug';

const App = () => {
  const [lista, setLista] = useState([]);

  const db = getFirestore(app);  //  Se include pentru a accesa firestore

  const getLista = async () => {
    const listacarti = await getDocs(collection(db, "cartiCopii"));
    let listaNoua = listacarti.docs.map((doc) => {
      let carte = doc.data();  //  Creez un obiect nou
      carte.src = `imagini/${carte.src}`;  //  Corectez calea
      carte.id = doc.id;      // adaug ID-ul în obiectul "carte" (trebuie!)
      return carte;
    });
    setLista(listaNoua);   //  Actualizez obiectul "state"
  };

  useEffect(() => {
    getLista();
  }, []);

  const adaug = async (carte) => {
    // Adaug un nou document folosind un ID generat automat.
    const docRef = await addDoc(collection(db, "cartiCopii"), carte);
    getLista();  //  Reafisez lista
    console.log("Document adaugat cu ID: ", docRef.id);
  };
 
  return (
    <>
      <Container>
        <h1>Carti pentru copii</h1>
      </Container>
      <ListaCarti listaCarti={lista} />
      <Container>
        <Adaug transmit={adaug} />
      </Container>
    </>
  );
}

export default App;