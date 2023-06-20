import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>O Presidente Modernista</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Juscelino Kubitschek de Oliveira, também conhecido pelas suas iniciais JK, foi um médico, oficial da Polícia Militar mineira e político brasileiro. Nascido em 12 de setembro de 1902, em Diamantina. Foi o 21º Presidente do Brasil, entre 1956 e 1961. Um de seus maiores feitos esta ligado a construção de Brasília fato mais marcante da história brasileira, e da política de JK no seu mandato de cinco anos como presidente. 
Além desse enorme feito, JK também trabalho por um Brasil moderno e pulsante econômico e culturalmente; O desenvolvimentismo econômico que o Brasil viveu durante o mandato de JK priorizou o investimento nos setores de transportes e energia, na indústria de base (bens de consumos duráveis e não duráveis), na substituição de importações, destacando a ascensão da indústria automobilística, e na Educação.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>O que foi os 50 anos em 5 promovido por JK?</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>O objetivo do lema "50 anos em 5" era promover a estrutura e o avanço da cidade de Brasília. Neste lema criado por Juscelino Kubitschek, a cidade avançaria em todos os aspectos. O Presidente da República, Juscelino Kubitschek inaugurou a cidade de Brasília, atual capital do Brasil, em 1960</p>
                </div>
            </div>
        </main>
    )
}
