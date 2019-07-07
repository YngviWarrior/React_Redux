import React from 'react';

export default props => [ // Solução 3 retorna como array usando ',' para separar.
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

// export default props => //Solução 2 não adiciona Div
// <React.Fragment> 
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
// </React.Fragment>

{/* <div> Solução 1 mais usada.
    <h1>Parte 1</h1>
    <h2>Parte 2</h2>
</div> */}