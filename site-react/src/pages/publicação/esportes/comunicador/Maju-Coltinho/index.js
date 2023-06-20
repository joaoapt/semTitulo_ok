import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Faustão</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Fausto Corrêa da Silva (São Paulo, 2 de maio de 1950), popularmente conhecido como Faustão, é um apresentador, comediante e radialista brasileiro.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Com uma vasta carreira no rádio iniciada na década de 1960, voltada especialmente para a editoria de esporte, Fausto estreou na televisão em 1984 com o programa de auditório Perdidos na Noite na TV Gazeta, que depois foi para a TV Record e TV Bandeirantes.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Seu maior êxito foi o programa de auditório Domingão do Faustão, exibido ininterruptamente pela TV Globo de 1989 a 2021, sendo um dos mais longevos programas da televisão brasileira. E mais recente na apresentação do programa Faustão na Band, na TV Bandeirantes entre os anos de 2022 a 2023.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ele é muito eficiente na comunicação de mensagem publicitária e isso deu uma força incrível para o programa. Depois do Silvio Santos, que é o dono do Baú e grande comunicador da própria marca, Faustão foi quem melhor trabalhou a comunicação das marcas para o público, principalmente para a audiência popular</p>
                </div>
            </div>
        </main>
    )
}