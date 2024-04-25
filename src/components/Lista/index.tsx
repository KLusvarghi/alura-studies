import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item';
import Style from './List.module.scss'

// Definindo uma interface para que sejá mais simples e limpo a maneira de tipar as propriedades recebidas por parâmetro
interface Props {
  tarefas: ITarefa[],

  // 'selecionatarefa' é uma função que recebe como parametro "tarefaSelecionada" que sua tipagem é do tipo 'ITarefa' que retorna void
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

// dizendo que recebe uma 'tarefa' já desestruturada, e que eu tipo é um objeto tarefa da interface ITarefa
function Lista({tarefas, selecionaTarefa}: Props) { 
 
  return (
    <aside className={Style.listaTarefas}>
      <h2> Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
          /*
          Podendo passar as props dessa maneira ou desestruturando
          tarefa={item.tarefa}
          tempo={item.tempo}
          */ 
          //  assim, passando todas as prorpiedaes de uma só vez
          {...item}
          key={item.id}
          selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;