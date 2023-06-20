import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Pelé</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A vida de Pelé é uma história notável de talento extraordinário, sucesso meteórico e inspiração global. Nascido como Edson Arantes do Nascimento em uma família humilde no Brasil, Pelé mostrou habilidades futebolísticas surpreendentes desde tenra idade. Seu talento excepcional e sua capacidade de controlar a bola com precisão e velocidade o levaram a ser descoberto por olheiros do futebol aos 15 anos de idade.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Aos 17 anos, Pelé já estava jogando na seleção brasileira, tornando-se o jogador mais jovem a marcar um gol em uma Copa do Mundo. Ele desempenhou um papel crucial na conquista do título mundial pelo Brasil em 1958, encantando o mundo com sua destreza e técnica incomparáveis. Pelé continuou a brilhar em sua carreira, conquistando mais dois títulos mundiais com a seleção brasileira e se tornando o maior artilheiro da história do futebol.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Além de suas conquistas no campo, Pelé também é admirado por sua personalidade humilde e carismática. Ele usou sua fama e influência para promover a paz, a educação e a igualdade ao redor do mundo. Pelé é um ícone global e uma lenda do futebol, cuja vida é uma inspiração para gerações futuras de jogadores e fãs do esporte.</p>
                </div>
            </div>
        </main>
    )
}