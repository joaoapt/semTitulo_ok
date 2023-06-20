import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Rita Lobato</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Rita Lobato uma grande médica e ativista brasileira representa mudança para as mulheres no pais apos conseguir ser a primeira mulher a se formar em medicina no Brasil  mesmo lutando como o machismo е à exclusão social que viveu em toda trajetória.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Após testemunhar a mãe morrendo no parto do 14° irmão, cresceu em uma imensa vontade de ajudar as mulheres na hora do parto, e  na conclusão do curso  Rita defendeu uma tese sobre cesariana e se especializou em ginecologia e obstetrícia.
Mas sedenta por conhecimento a medica foi para Buenos aires, buscar cada vez mais melhorias, mesmo sentindo a dor de deixar o marido e filha no Brasil.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Após uma grande experiência nos anos de estudo, voltou para o Brasil fazendo diferença na vida das pessoas, e principalmente dos mais necessitados que era o principal público de Rita, mostrando que a força de um sonho e de vontade de trazer mudança pode mudar o futuros de muitas pessoas.</p>
                </div>
            </div>
        </main>
    )
}