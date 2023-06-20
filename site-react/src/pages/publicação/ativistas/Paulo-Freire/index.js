import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>O legado do educador que transformou vidas</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>No cenário educacional brasileiro, um homem traz um conceito inovador na abordagem de ensino. Paulo Reglus Neves Freire, nascido em 1921, em Recife, teve sua vida voltada para educação com uma sensibilidade as desigualdades sociais, ele enxergou uma chave para independência dos indivíduos.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A abordagem de Freire, a "Pedagogia do Oprimido" tem como base, a valorização do conhecimento e experiências do estudante sobre o assunto, levando em consideração sua realidade. Para Freire a educação não deveria ser apenas uma transmissão de conteúdos e sim um processo baseado no dialogo, em que o professor e o aluno se ajudem na construção do conhecimento.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ele lançou um livro chamado "Pedagogia do Oprimido", que foi publicado em 1968, se tornou popular ao redor do mundo, tornando se referencia para educadores do mundo inteiro. Ele defendia a importância de uma educação libertadora, critica, capaz de capacitar os indivíduos a compreenderem a realidade em que vivem e agirem de forma transformadora.</p>
                </div>
            </div>
        </main>
    )
}