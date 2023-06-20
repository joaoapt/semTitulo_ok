import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Maurício de Sousa</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Maurício de Sousa ( nasceu em Santa Isabel ,27 de outubro de 1935)é um cartunista ,empresário  e escritor brasileiro.é um dos mais famosos cartunistas do Brasil ,sendo o criador da turma da Mônica e membro da academia paulista de letras.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Sua infância foi em um ambiente bastante cultural ,onde sua casa estava sempre cheia de livros .então era comum receber saraus ,reuniões de artistas e rodas de chorinho . Sua mãe queria q ele se tornasse um cantor mirim , mas sua timidez não lhe permitiu seguir.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Maurício queria viver profissionalmente do desenho .para isso , em 1954 , procurou emprego de desenhista em São Paulo mas só consegui uma vaga de repórter policial na folha da manhã.passou cinco anos escrevendo esse tipo de reportagem , que ilustrava com desenhos bem aceitos pelos leitores .Maurício de Sousa começou a desenhar histórias em quadrinhos em 18 de julho de 1959 ,quando uma história do cãozinho bidu , seu primeiro personagem foi aprovado pelo jornal . As tiras em quadrinhos com o cãozinho bidu e seu dono ,franjinha , deram origem ao cebolinha em 1960.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>É um ano antes ele criou a turma da Mônica uma história em quadrinhos brasileira mais publicada no mundo .a primeira tirinha oficial surgiu no ano de 1959 .sua grande fonte de inspiração para criar os personagens veio de sua própria família !</p>
                </div>
            </div>
        </main>
    )
}