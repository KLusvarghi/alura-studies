import React from 'react'
import Style from './Button.module.scss'

// Definindo uma interface para que sejá mais simples e limpo a maneira de tipar as propriedades recebidas por parâmetro
interface Props {
  text: string, 
  type?: "button" | "submit" | "reset" | undefined,  // para um maior tipagem o type exige que definimos os tipos possiveis
  onClick?: () => void // sendo uma função que retorna void

  // Caso eu utilizasse o 'children' para definir o nome do botão, ele seria assim:
  // children: React.ReactNode
}

export default function Botao({text, onClick, type}: Props){
  return (
    <button 
      onClick={onClick} 
      className={Style.botao} 
      type={type}
    >
      {text}
    </button>
  )
}




// class Botao1 extends React.Component<{ text: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}> { 
//   //dizendo os tipos de 'type' pode receber
//   //dizendo que pode ou não receber uma função que retorna void
//   render(): React.ReactNode {
//     const {type = "button", onClick} = this.props; // desestruturnado o type, caso o valor de type não seja definido, ele terá o valor de "button", sendo o type desestruturado de 'this.props'
//     // e em seguida desestruturando o 'onClick' passado por parametro
//     // sendo esse priemiro "onclick" do proprio botão, e caso ele sejá clicado ele irá chamar a função que foi passado por parametro "onClick"
//     return (
//       <button onClick={onClick} className={Style.botao} type={type}>
//         {this.props.text}
//       </button>
//     )
//   }
// }

// export default Botao1;