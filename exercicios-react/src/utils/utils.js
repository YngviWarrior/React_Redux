import React from 'react'

export function filhosComProps(props){
    {/* Passa as propriedades do pai para todos componentes filhos */}
    return React.Children.map(props.children, componenteFilho => {
        return React.cloneElement(componenteFilho, {...props})
    })
}