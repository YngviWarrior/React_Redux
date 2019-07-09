import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
//import {CompA as A,  CompB as B } from './componentes/DoisComponentes';
// import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root');
//Tag Personalizada.
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={100} /> */}
        {/* <ComponenteClasse valor="Sou um componente de classe."/> */}
        {/* <Pai/> */}
        {/* <ComponenteComFuncao />  */}
        {/* <Familia sobrenome="Pereira" >
            <Membro nome="André" />
            <Membro nome="Ana" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos /> */}
        {/* <A valor="Eu sou A." />
        <B valor="Eu sou B." /> */}
        {/* <PrimeiroComponente valor="Bom dia." aBcD={Math.pow(2,8)}/>  */}

    </div>
, elemento);

//ReactDOM.render("Olá React", elemento);
//ReactDOM.render(<h1>Olá React</h1>, elemento);//Usando código JSX. Necessario import React. 1º parametro, as tags se convertem para JS.
