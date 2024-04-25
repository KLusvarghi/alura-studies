import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import Style from  './App.module.scss'

function App() {
  // dizendo que o useState pode ser igual a interface de ITarefa ou um array vazio
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])  
  const [selecionado, setSelecionado] = useState<ITarefa>();

  // função que irá interar e adiconar a condição true para a tarefa selecionada e false para as outras
  // recebendo como parametro uma tarefa que foi selecionada, tendo seu id, tarefa, tempo, selecionado e completado
  function selecionaTarefa(tarefaSelecionada: ITarefa){ 
    // console.log(tarefaSelecionada)

    // passando para o hook useState as prorpiedades da tarefa selecionada
    setSelecionado(tarefaSelecionada)

    // sendo 'tarefasAnteriores' todas as tarefas existentes
    // Assim, passando todas as tarefas com o spread operator
    // e modificando o atributo 'selecionado' verificando se o id de algumja das tarefas é igual o id da tarefa recebida como parematro na função que é o "tarefaSelecionada"
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  // essa função basicamente irá ser chamada após a tarefa finalizada, e ela irá percorrer todas as tarefas e a que está selecionada, será des selecionada e o 'completo' dela irá para true
  function finalizarTarefa() {
    // se existe uma tarefa selecionara... :
    if(selecionado){ 
      // des selecionadno qualquer tarefa
      setSelecionado(undefined) 
      // percorrendo todas as tarefas
      // e verificando se alguma delas é igual a de 'selecionado'
      setTarefas(todasTarefas => todasTarefas.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }) )
    }
  }
  
  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      {/* passando apenas "tarefas" para o lista por que ele apenas exibe as tarefas */}
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      /> 
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}  
      />
    </div>
  );
}

export default App;
