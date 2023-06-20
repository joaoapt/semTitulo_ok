import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Carolina Maria de Jesus</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A vida de Carolina Maria de Jesus é uma história de luta, superação e perseverança. Nascida em uma família pobre em Sacramento, Brasil, Carolina enfrentou uma infância marcada pela pobreza e pelas adversidades. Ela viveu em uma favela em São Paulo, onde enfrentou condições precárias de moradia e falta de oportunidades.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Carolina começou a escrever em diários encontrados no lixo, registrando suas experiências diárias e expressando seus sentimentos e pensamentos sobre a desigualdade e a injustiça social que testemunhava. Em 1960, seu trabalho foi descoberto por um jornalista e resultou na publicação do livro "Quarto de Despejo: Diário de uma Favelada". A obra, escrita com uma linguagem franca e visceral, se tornou um sucesso internacional, retratando a realidade da pobreza e dando voz aos marginalizados.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Apesar de sua ascensão à fama literária, Carolina enfrentou muitos desafios ao longo de sua vida. Ela lutou contra a discriminação racial e as dificuldades financeiras, mas nunca abandonou sua paixão pela escrita. Carolina continuou a produzir obras literárias, embora com menos reconhecimento do que seu primeiro livro. Ela deixou um legado importante como uma das primeiras escritoras negras do Brasil a alcançar reconhecimento nacional e internacional.</p>
                </div>
            </div>
        </main>
    )
}