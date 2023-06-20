import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Getúlio Dornetes Vargas</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>O pai dos pobres Talvez esse seja o primeiro nome mais significativo de toda a história do Brasil, mas seguramente o mais importante desde o início da República.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Seu nome está ligado a grandes controvérsias, um grande estadista ou seja um homem identificado com às instituições, porém também ligado a um ditador em um período longo de nossa história, mas o que se pendurou até os dias atuais é o apelido “Pai dos pobres”.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Getúlio foi fruto de seu tempo, nascendo em 1882, em um grande momento de conflito de poder no Brasil entre a coroa e a sociedade civil. Quando Vargas assumiu a presidência, ninguém obviamente tinha ideia de que se iniciava um período de quinze anos do político gaúcho na nossa presidência no Brasil. Esses 15 anos são conhecidos como Era Vargas e foram divididos em distintas fases: Governo Provisório (1930-1934), Governo Constitucional (1934-1937) e Estado Novo (1937-1945)</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Independente do bem e do mal, não há possibilidade de não reconhecer a construção de uma nova República Brasileira, pois até os dias atuais bebemos de seu pioneirismo ou aprovações. Por exemplo: Ensino primário gratuito, justiça trabalhista, CLT, cultura popular, código civil e criminal, voto feminino, salário mínimo, entre outros.</p>
                </div>
            </div>
        </main>
    )
}