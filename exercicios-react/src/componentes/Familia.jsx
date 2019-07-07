import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Familia</h1>
        {filhosComProps(props)}

        {/* Passa as propriedades do pai para todos componentes filhos
        {React.Children.map(props.children, componenteFilho => {
            return React.cloneElement(componenteFilho, {...props})
        })} */}

        {/* Só funciona com 1 elemento, passa todos as propriedades */}
        {/* {React.cloneElement(props.children, {...props})} */}

        {/* Passa 1 propriedade para o filho */}
        {/* {React.cloneElement(props.children, 
            {sobrenome: props.sobrenome})} */}

        {/* {props.children} */}
    </div>
    // <div>
    //     <h1>Familia</h1>
    //     {props.children}
    // </div>