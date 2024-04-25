import React, {useState} from 'react'
import { ITarefa } from '../../types/tarefa'
import Botao from '../button'
import Style from './Form.module.scss'
import {v4 as uuidv4} from 'uuid';

interface Props {
  // para saber a tipagem de 'setTarefas' basta ir em app.tsx e passar o mause por cima de "setTarefas"
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> // utilizando a interface que está em types
}

export default function Formulario({setTarefas}: Props) {
  const [tempo, setTempo] = useState("00:00");
  const [tarefa, setTarefa] = useState("");

  // tipando o 'e' de event, e sendo mais expecifico dzendo que ele vem diretamente de "HTMLFormElement"
  function addTarefa(e: React.FormEvent<HTMLFormElement>) { 
    // previnindo o comportamento padrão
    e.preventDefault(); 
    
    // e dentro de cada tarefa ele irá passar as tarefas com seu tempo e o restante das propriedades
    // dizendo ao setTarefas que ele recebe as tarefas antigas, passando elas com o spred operator, e que recebe mais todos os itens de this.state, que irá conter a tarfa e o tempo adicionados
    setTarefas(tarefasAntigas => 
      [...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4() //abrindo parentes por que é uma função
        }
      ]
    ) 

    // resetando o formulário após o valor adicionado
    setTarefa("")
    setTempo("00:00")
  }

  return (
    <form className={Style.novaTarefa} onSubmit={addTarefa}>
    <div className={Style.inputContainer}>
      <label htmlFor='tarefa'>
        Adicione um novo estudo
      </label>
      <input 
        type="text" 
        name="tarefa" 
        id="tarefa" 
        placeholder='O que você quer estudar'
        value={tarefa}
        onChange={evento => setTarefa(evento.target.value)}
      />
    </div>

    <div className={Style.inputContainer}>
      <label htmlFor='tempo'>
        Tempo
      </label>
      <input 
        type="time" 
        step="1" 
        name='tempo'
        id='tempo'

        // atributo para o valor atual
        value={tempo}

        // quando o valor for alterado ainda na aba do relogio, ele terá que ser exibido
        // a maneira de pegar o valor do input de tempo
        // quando o vlaor mudar, ele irá pegar o value do target do evento, e irá modificar o tempo selecionado
        onChange={ evento => setTempo(evento.target.value)}
        min="00:00:05"
        max="01:30:00"
        required
      />
    </div>
    <Botao
      text='Adicionar'
      type="submit"
    />
  </form>
  )
}






// // Sendo assim que se passa as props em uma class
// class Formulario1 extends React.Component<{
//   // para saber a tipagem de 'setTarefas' basta ir em app.tsx e passar o mause por cima de "setTarefas"
//   setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> // utilizando a interface que está em types
// }> {
//   state = { // tendo todo o state do class component
//     tarefa: "",
//     tempo: "00:00"
//   }
//   addTarefa(e: React.FormEvent<HTMLFormElement>) { //tipando o 'e' de event, e sendo mais expecifico dzendo que ele vem diretamente de "HTMLFormElement"
//     e.preventDefault(); // previnindo o comportamento padrão
//     this.props.setTarefas(tarefasAntigas => 
//       [...tarefasAntigas, 
//         {
//           ...this.state,
//           selecionado: false,
//           completado: false,
//           id: uuidv4() //abrindo parentes por que é uma função
//         }
//       ]
//     ) // dizendo ao setTarefas que ele recebe as tarefas antigas, passando elas com o spred operator, e que recebe mais todos os itens de this.state, que irá conter a tarfa e o tempo adicionados

//     // resetando o formulário após o valor adicionado
//     this.setState({
//       tarefa: "",
//       tempo: "00:00"
//     })
//   }
//   render(): React.ReactNode {
//       return (
//         // fazendo o bind em "addTarefa" para que faça referencia ao this da função "addTarefa"
//         <form className={Style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
//           <div className={Style.inputContainer}>
//             <label htmlFor='tarefa'>
//               Adicione um novo estudo
//             </label>
//             <input 
//               type="text" 
//               name="tarefa" 
//               id="tarefa" 
//               placeholder='O que você quer estudar'

//               value={this.state.tarefa}
//               onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
//             />
//           </div>

//           <div className={Style.inputContainer}>
//             <label htmlFor='tempo'>
//               Tempo
//             </label>
//             <input 
//               type="time" 
//               step="1" 
//               name='tempo'
//               id='tempo'
//               // atributo para o valor atual
//               value={this.state.tempo}
//               // quando o valor for alterado ainda na aba do relogio, ele terá que ser exibido
//               // a maneira de pegar o valor do input de tempi
//               // por padrã mesmo não ter definico o "setState" por default ele já existe, existendo apenas um state e um setState
//               // para pegar o valor: evento.target.value
//               onChange={ evento => this.setState({...this.state, tempo: evento.target.value})}
//               min="00:00:00"
//               max="01:30:00"
//               required
//             />
//           </div>
//           <Botao
//             text='Adicionar'
//             type="submit"
//           />
//         </form>
//       )
//   }
// }

// export default Formulario1;