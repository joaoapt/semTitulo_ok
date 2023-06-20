import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Ferréz</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ferréz, nome artístico de Reginaldo Ferreira da Silva (São Paulo, 1975) é um romancista, contista, poeta e empreendedor brasileiro. Costuma utilizar a "literatura marginal" em suas obras, por ser desenvolvida na periferia das grandes cidades e tratar de temas relacionados a esta vivência. Ferréz começou publicando fanzines. Dotado de linguagem influenciada pela variante linguística usada na periferia de São Paulo, Ferréz já publicou diversos livros como Fortaleza da Desilusão (1997), Capão Pecado (2001), Amanhecer Esmeralda (2005), Ninguém É Inocente em São Paulo (2006), Deus foi almoçar (2012) e Os ricos também morrem (2015).</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ferréz é fundador do 1DaSul, grupo que promove eventos e ações culturais na região do Capão Redondo, ligados ao movimento hip-hop. A ONG Interferência que trabalha com crianças da Zona Sul e fundou o Selo Povo, editora independente. Em 1995 fundou a banda punk Fugitivos da Fema, tem um programa pela "Ferréz em construção" onde entrevista pessoas para comentar sobre cultura. Em junho de 2019 anunciou uma parceria com o canal Comix Zone, para criar uma editora de quadrinhos homônima. Em 2021 criou o Podcast Avesso com os Estúdios Flow.</p>
                </div>
            </div>
        </main>
    )
}