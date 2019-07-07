import React from 'react';

const CompA = props => 
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props => //Dentro da chaves no index tem que ser importado com o nome igual e se quizer renomea-lo com uso do 'as'.
    <h1>Segundo diz: {props.valor}</h1>

// export default CompA //Com Default vc pode importar fora das chaves. Só pode exportar 1 componente por default. 

// export default function(){ //Sem Default não exporta algo anônimo.
//     return <p>Teste</p>
// }

export {CompA, CompB}