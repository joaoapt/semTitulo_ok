import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Elza Soares</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Elza Soares mulher, preta e periférica, nascida em junho de 1930, um dos maiores nomes da música Brasileira, chegou a ser considerada a "melhor cantora do universo".</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Mas não só isso Elza Soares é o símbolo de empoderamento feminino, da representatividade e do antiracismo, pois sua história de superação serviu de inspiração para muitas mulheres.
Apesar de ter vivido em um época em que a mulher devia seguir as regras do patriarcado, de casar, ter filhos e ser dona de casa, empoderada desde nova, Elza passou por todos os julgamentos e preconceitos, para chegar onde ela chegou.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Ao longo de sua vida passou por dois casamentos abusivos onde sofria diversas violências tanto física como verbal, ao total enterrou quatro de seus filhos, mas apesar de todo seu sofrimento, ela persistiu no seu sonho  de cantar, ganhou diversos prêmios ao longo de sua  carreira, entre eles Grammy Latino como o melhor álbum de música popular brasileira.</p>
                </div>
            </div>
        </main>
    )
}