import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Olha o avianzinho!!!</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Foi no dia 12 de dezembro de 1930 que nasceu o dono dos avianzinhos, mas não esses que vc está pensando ou melhor pelo título você já sabe de quem estamos falando ele, Senor abravanel mais conhecido como Silvio Santos, Criador dos aviazinhos de dinheiro. Um dos maiores comunicadores do Brasil, se não o maior que a televisão já teve, com recordes até no guinnes Book com o programa por mais tempo no ar.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Empreendedor desde muito cedo, Silvio sempre foi muito ambicioso, vendeu de balas na escola, até cervejas na balça, e olha quem diria que um ambulante viraria um fenômeno nacional, ainda mais dono de emissora, o SBT desde os anos 60.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Com seu jeito único, quadros inivadores, sua voz inigualável e seus clássicos bordões, Silvio entregou entretenimento em todos os domingos durante anos, juntamente com seus prêmios para sua plateia e seus diversos quadros que davam oportunidade de diversas pessoas ganhar dinheiro ou até mesmo mudar de vida.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Gênio e mais um exemplo de vida brasileira, que abriu portas e inspirou e inspira sonhos até hoje.</p>
                </div>
            </div>
        </main>
    )
}