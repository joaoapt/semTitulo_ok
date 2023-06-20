import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Luiz Gama</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Luiz Gama (1830-1882) nasceu em Salvador. Filho de um descendente de portugueses com uma escrava liberta, acabou vendido aos dez anos como escravo pelo próprio pai, que precisava de dinheiro para pagar dívidas de jogo. A alforria veio aos 17. Como autodidata, ele passou a estudar Direito e, usando as letras da lei, começou a defender escravos.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>"Foi o maior advogado da história do Brasil, por conta de sua trajetória, de seu brilhantismo. Era um sujeito que demonstrava capacidade e manejo da tecnicalidade do Direito que são impressionantes até hoje", elogia o jurista Silvio Luiz de Almeida, presidente do Instituto Luiz Gama e professor de Direito da Universidade Presbiteriana Mackenzie.</p>
                </div>
            </div>
        </main>
    )
}