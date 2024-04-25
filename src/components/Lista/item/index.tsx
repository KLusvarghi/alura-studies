import React from 'react';
import { ITarefa } from '../../../types/tarefa';
import Style from './Item.module.scss';

// sendo uma interface que extende de 'ITarefa', assim possuindo todos as propriedades dela mais a que serão definidas
interface Props extends ITarefa {
  // 'selecionatarefa' é uma função que recebe como parametro "tarefaSelecionada" que sua tipagem é do tipo 'ITarefa' que retorna void
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

// já desestruturando as props que tem como tipação a interface "ITarefa"
export default function Item(
  {
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefa
  }: Props) { //tipando o valor das props recebidas
  // console.log('item atual: ', {tarefa, tempo, selecionado, completado, id} )
  // const {tarefa, tempo} = props // podendo desestruturar dessa maneira tambem
  return (
    <li 
    // add a classe selecionado
      className={`${Style.item} ${selecionado ? Style.itemSelecionado : ''} ${completado ? Style.itemCompletado : ''}`} 
        
      // dizendo para o onClick que ele só poderá ser clicado se o 'completado' for false , assim negando o completado
        onClick={() => !completado && selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        })
      }
    >
    <h3>{tarefa}</h3>
    <span>{tempo}</span>
    
    {/* sendo uma renderização condicional */}
    {completado && <span className={Style.concluido} area-label="tarefa-completada"></span>}
  </li>
  )
}