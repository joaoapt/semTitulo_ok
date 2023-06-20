import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Oscar Niemeyer</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Oscar Niemeyer foi um arquiteto brasileiro, amplamente reconhecido como uma das figuras mais importantes no desenvolvimento da arquitetura moderna. Ele nasceu em 15 de dezembro de 1907, no Rio de Janeiro, Brasil, e faleceu em 5 de dezembro de 2012, aos 104 anos.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>O estilo arquitetônico característico de Niemeyer era marcado por curvas suaves, formas audaciosas e o uso do concreto armado. Ele abraçou o conceito de modernismo e incorporou elementos da cultura e da paisagem natural do Brasil em seus projetos. Suas construções frequentemente apresentavam espaços abertos, formas orgânicas e uma ênfase na harmonia entre a arquitetura e a natureza.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Algumas das obras mais famosas de Niemeyer incluem o projeto dos edifícios na cidade de Brasília, capital do Brasil, que foi construída de 1956 a 1960. A arquitetura da cidade, incluindo o Palácio do Planalto, o Congresso Nacional e a Catedral de Brasília, exibe o estilo único de Niemeyer e contribuiu para seu reconhecimento internacional.</p>
                </div>
            </div>
        </main>
    )
}