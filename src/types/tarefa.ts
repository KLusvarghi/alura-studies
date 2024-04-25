//criando uma interface para que na hora de tipar os dados recebido como props ficar mais facil e simples de se visualizar
export interface ITarefa {
  tarefa: string,
  tempo: string,
  selecionado: boolean,
  completado: boolean,
  id: string
}