import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>CONHEÇA A HISTÓRIA DO MAIOR TENISTA DO PAÍS</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'> Gustavo Kuerten, mais conhecido como Guga, nascido em setembro de 1976 em Florianópolis santa Catarina é um ex-tenista profissional brasileiro, o famoso Guga, é o maior tenista da história do Brasil — e disso todos sabemos. Com uma carreira brilhante e uma simpatia que conquistou o mundo, o atleta teve seu auge no final da década de 1990 e no início dos anos 2000, encantando quem já gostava do esporte e atraindo toda uma nova legião de fãs. Neste texto, nós contamos a história de Guga Kuerten.
Em 3 de dezembro do ano 2000, Gustavo Kuerten venceu a final contra um dos favoritos, o norte-americano André Agassi, no Masters de Lisboa, em Portugal. Aquela vitória fez de Guga o primeiro sul-americano a terminar uma temporada como o número 1 do mundo.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Já o tricampeonato, e último título de Grand Slam de Guga, veio no ano seguinte, em 2001 — acompanhado de 60 vitórias no ano e da 2ª colocação entre os maiores do ranking da ATP. Nos anos seguintes, no entanto, vieram as dores no quadril, as cirurgias e a queda de rendimento.
Em 2005, 2006 e 2007 foram poucas competições, e a carreira genial de um dos maiores atletas que o Brasil e o mundo já viram chegava perto do fim. A despedida oficial foi em 25 de maio de 2008, na quadra central do campeonato que consagrou Guga Kuerten, o Roland Garros.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ao fim de seus quase 20 anos de carreira, Guga somou 28 títulos, sendo 20 individuais e 8 em duplas. Além disso, ficou 43 semanas na primeira posição do ranking da ATP, sendo, oficialmente, o maior tenista do mundo.</p>
                </div>
            </div>
        </main>
    )
}