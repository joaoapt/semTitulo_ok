import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>A esfinge Brasileira</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Clarice Lispector nascente criança ucraniana com uma construção de mulher brasileira, dizemos isso pois a mesma se considerava dessa forma, não permitindo chamá-la de outra forma.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Filha de pais judeus, foi obrigada a fugir de sua terra Natal devido às perseguições. Para o bem ou para o mal, isso trouxe ao Brasil a maior riqueza literária da nossa modernidade.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Clarice era uma mulher singular, pois sua forma de ver o mundo e senti-lo trouxe a ela uma relação paradoxal de realismo e esperança na produção de seus textos, como: A hora da estrela, Água viva, felicidade clandestina e entre outros.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A escritora sofreu as angustias como 90% da população feminina em sua época, tendo de cuidar da sua mãe que possuía sífilis, morrendo de câncer no ovário um tempo depois, participandouda angústiante doença de seu filho João que precisou ser internado em um sanatório, também sofrendo da ausência do Brasil, pois era obrigada a seguir seu marido que era diplomata. Hoje Clarice é conhecida mundialmente por suas obras tendo grande influência no feminismo na literatura brasileira.</p>
                </div>
            </div>
        </main>
    )
}