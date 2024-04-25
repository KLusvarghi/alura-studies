// Função responsavel por converter o tempo que vem em string para number e trnasforma lo de em segundos
export default function tempoParaSegundos(tempo: string) {

  // dividindo a string de horas em 3, porem caso o vlaor de alguma não venha ou sejá zero, definimos um valor padrão de '0' para elas
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

  const horasEmSegundos = Number(horas) * 3600; // convertendo horas em segundos
  const minutosEmSegundos = Number(minutos) * 60 //convertendo minutos e segundos
  return horasEmSegundos + minutosEmSegundos + Number(segundos) 
}