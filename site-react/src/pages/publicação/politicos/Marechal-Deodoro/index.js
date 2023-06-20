import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Manuel Deodoro da Fonseca</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Manuel Deodoro da Fonseca nasceu em 5 de agosto de 1827, em Alagoas da Lagoa do Sul, no estado de Alagoas. " foi o primeiro presidente brasileiro, depois de se favorecer de um conflito entre a Igreja, fazendeiros e militares, que querem a descentralização do poder. É quando um levante militar depõe o imperador Dom Pedro II e institui a República como a nova forma de governo do Brasil. No dia 15 novembro de 1889, há exatos 133 anos, aconteceu a Proclamação da República do Brasil, ato que resultou na derrubada da Monarquia e na instauração da República no Brasil. </p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A conspiração contra a monarquia contou com a adesão do marechal Deodoro da Fonseca,  responsável por liderar a derrubada do gabinete ministerial. Com isso, marechal Deodoro da Fonseca acabou tornando-se o primeiro presidente do Brasil.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A proclamação foi fruto da crise do império e sua incapacidade de atender as novas demandas que foram surgindo na sociedade brasileira. Essas insatisfações convergiram-se para o movimento republicano, que, um tanto na base do planejamento e um tanto na base do improviso, realizou um golpe que colocou fim na monarquia no Brasil.</p>
                </div>
            </div>
        </main>
    )
}