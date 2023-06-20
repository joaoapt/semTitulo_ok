import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>A ventureira</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'> Gloria Maria uma mulher comum assim como muitas outras brasileiras, e que mesmo assim teve influência tamanha na televisão e cultura brasileira. Ajudando meninas e meninos negros a serem representados, desde da década de 70.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Carioca, nascida e crescida em vila maria. Teve uma infância humilde e difícil, tendo que começar a trabalhar com 16 anos, ao se destacar por suas redações na escola, glória não teve dificuldades de entrar na faculdade de jornalismo.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Sua primeira reportagem foi na cobertura do desabamento do Elevado Paulo de Frontin, em 20 de novembro de 1971. Com pouco tempo, Glória Maria tornou-se âncora do RJTV, jornal da cidade do Rio de Janeiro.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Conquistando milhares de fãs por sua humildade, simplicidade e carisma.Possuindo uma vida cheia de aventuras e tendo entrevistados tantas estrelas mundiais podemos dizer que glória se tornou uma também, escrevendo seu nome na história do jornalismo brasileiro como um ícone.</p>
                </div>
            </div>
        </main>
    )
}