import './App.css';
import * as React from 'react';
import CardsOne from './CardsOne';


function MultiActionAreaCard() {

  const array = []
  array.push({ "text": "Esta es la card 1", "img": require("../src/img/one.jpeg"), "msg": "La card 1 te manda saludos" });
  array.push({ "text": "Esta es la card 2", "img": require("../src/img/react.png"), "msg": "La card 2 te manda saludos" });


  return (
    <>
      {array.map(object => <CardsOne object={object}>
      </CardsOne>)}
    </>
  )

}


export default MultiActionAreaCard;
