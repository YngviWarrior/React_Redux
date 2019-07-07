import React from 'react'; //Import para uso do JSX.

let isLegal= true;

export default (props) => // Propriedades do html {} para acessar algo do JS.
    <div>
        <h1>{props.valor}</h1>
        <h2>{1+1}</h2>
        <p> Legal? {isLegal ? 'sim' : 'nao'}</p>
        <p>{Math.random()}</p>
    </div>
/*Arrow Function. () é usado para expressões. NÃO É OBRIGATORIO PARA COMPONENTE BASEADA EM FUNÇÃO NEM USO DO RETURN.    
export default (props) =>
    <div>
        <h1>Primeiro Componente (Arrow)!</h1>
    </div>

/* Função Nomeada.
function primeiro(){
    return <h1>Primeiro Componente!</h1> //JSX.
}
export default primeiro;
*/
/*Função Anônima.
export default function (){
    return <h1>Primeiro Componente!</h1> //JSX.
}

export default primeiro;
*/