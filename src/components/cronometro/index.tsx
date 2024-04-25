import Botao from '../button'
import Relogio from './Relogio'
import Style from './Cronometro.module.scss';
import tempoParaSegundos from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { useState, useEffect } from 'react';

interface Props {
  //tendo que dizer que ele é Itarefa ou undefined se não dará problema se não colocar o '| undefined'
  // por conta que pode haver ou não item selecionado
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void // recebendo tbm a função de finalizar tarefa que retorna void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {
  const [tempo, setTempo] = useState<number>() // como não passamos valor, temos que tipar ele dizendo seu tipo

  useEffect(() => {
    // como 'selecioando' pode existir ou não, colocamos '?' após ele 
    if(selecionado?.tempo) setTempo(tempoParaSegundos(selecionado.tempo))
  }, [selecionado]) // toda vez que o selecionado mudar ele irá ativar essa função

  // sendo nessa função aonde iremos fazer o tempo regredir
  function regressiva(contador: number = 0) { // para que a gente não trabalhe com 'undefined' caso o valor de number venha como undefined ele terá o valor padrão de '0'
    // console.log('começando: ', contador)

    // função regressiva, para que a gente consiga diminuir o contador, etc
    setTimeout(()=> {
      if(contador > 0){
        setTempo(contador - 1)
        // console.log('Após a decrementação: ', contador)
        // console.log(tempo)
        
        //sendo aqui a função recursiva, para que cointinue a decrementar, ele tem que chamar a função novamente com o contador decrementado, não que ele irá decrementar duas vezes, ele decrementa a primeira e a proxima chamada da função ele tem que passar o numero anterior - 1
        return regressiva(contador - 1) 
      }else {
        finalizarTarefa()
      }
    }, 1000) // será executada após 1000 milessegundos
  }

  return (
    <div className={Style.cronometro}>
      <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={Style.relogioWrapper}>
        <Relogio tempo={tempo}/> {/* passando o tempo como props para o 'Relogio' */}
      </div>
      <Botao
      // passando um props 'onClick' que é passado como parametro a função regressiva que tem como parametro o tempo da tarefa
        onClick={ () => regressiva(tempo)}
        text='Começar!'
      />
    </div>
  )
}