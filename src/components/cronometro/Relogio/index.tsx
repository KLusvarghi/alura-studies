import Style from './Relogio.module.scss';

interface Props {
  //para que não de erro, como o tempo de inicio é undefined, tem que se colocar aqui na interface 
  tempo: number | undefined 
}

// passando um valor padrão para o tempo
export default function Relogio({tempo = 0}: Props ) {
  // pagando os minutos e segundos
  // porem tenho que pegar a unidade e a dezena de forma independente de cada um
  const minutos = Math.floor(tempo / 60) 
  const segundos =  tempo % 60

  // desestruturando a string, porem ele me dará um erro por conta que o typescript não entende o typo string como um tipo array, tendo que ir no arquivo 'tsconfig.json'
  // e adicioanr: "downlevelIteration": true,

  // tendo uma função do js que ele transforma a cadeia de caracteres em um cadeia padrão como a gente bem quiser, então nesse caso quero que todos numeros de uma unidade do 0 ao 9, sejam 01, 02, 03...
  // sendo o primeiro parametro a largura dessa cadeira que queremos
  // segundo parametro é com qual caractere a gente quer que preencha
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
    
  return (
    <>
      <span className={Style.relogioNumero}>{minutoDezena}</span>
      <span className={Style.relogioNumero}>{minutoUnidade}</span>
      <span className={Style.relogioDivisao}>:</span>
      <span className={Style.relogioNumero}>{segundoDezena}</span>
      <span className={Style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}