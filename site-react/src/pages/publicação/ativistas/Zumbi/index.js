import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Zumbi Lider dos quilombola</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Zumbi dos palmares nascido em 1655, foi um líder quilombola muito importante para a nossa história sobre a escravidão.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ele é conhecido por lutar contra a escravidão, lutou também pela liberdade de culto religioso e pela prática da cultura africana no País. Casado com Dandara dos palmares, uma mulher guerreira de 3 filhos, que como zumbi lutou contra os portugueses referente ao acordo que foi proposto a Ganga Zumba (líder anterior a Zumbi dos Palmares) pelo rei de portugal, que propunha  a liberdade para os nascidos em Palmares, mas todos que fossem fugidos deveriam retornar a seus donos.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Dandara suicidou-se em 6 de fevereiro de 1694 após ser capturada, para a mesma não ser mantida como cativa.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Já Zumbi dos palmares, faleceu no dia 20 de novembro que ficou denominado como dia da consciência negra, por um de seus capitães. Sua cabeça foi cortada, salgada e levada ao governador Melo e Castro. Foi exposta em praça pública de modo a acabar com o mito da imortalidade de Zumbi dos Palmares.</p>
                </div>
            </div>
        </main>
    )
}