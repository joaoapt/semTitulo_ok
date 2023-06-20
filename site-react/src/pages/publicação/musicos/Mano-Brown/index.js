import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Mano Brown</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>No mês de abril, Mano Brown fez 52 anos de idade, mas não há dúvidas de que a cultura brasileira é quem foi presenteada ao longo dos mais de 30 anos de carreira do artista.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Principal nome do rap brasileiro e responsável por popularizar o gênero musical que ainda hoje é alvo de preconceito e marginalizado, o rapper nascido e criado em Capão Redondo (SP) foi além das canções, sendo hoje referência de consciência política e social, exemplo de superação e coragem para tocar o dedo na ferida.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A partir de suas letras, as minorias puderam se ver representadas, ao mesmo tempo em que recebiam a mensagem de que é necessário lutar, pois a realidade é cruel há séculos.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Na companhia do grupo Racionais MC’s, formado em 1988, Pedro Paulo Soares Pereira (nome de batismo do astro) foi vanguarda na Música Popular Brasileira ao trazer o rap para cena brasileira. Com letras fortes que mostram a realidade da periferia, Mano Brown fez poesia ao retratar a vida marginalizada do preto favelado.</p>
                </div>
            </div>
        </main>
    )
}