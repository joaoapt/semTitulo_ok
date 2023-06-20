import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>Monteiro Lobato</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A vida de Monteiro Lobato foi marcada por sua paixão pela literatura e seu compromisso com a educação. Nascido em Taubaté, Brasil, em 1882, Lobato teve uma infância influenciada pela leitura e pelo contato com livros. Sua imaginação fértil e interesse pela escrita o levaram a se tornar um dos mais renomados escritores brasileiros.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Lobato é conhecido principalmente por suas obras infantis, que apresentam personagens cativantes, como a turma do Sítio do Picapau Amarelo. Suas histórias combinam elementos de fantasia e realidade, abordando questões sociais e culturais de forma lúdica e acessível. Lobato tinha como objetivo despertar o interesse das crianças pela leitura e pela cultura brasileira, incentivando a imaginação e a curiosidade.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Além de seu trabalho como escritor, Monteiro Lobato também teve uma atuação destacada na área da educação. Ele fundou uma editora e criou um projeto pioneiro de literatura infantil para escolas, conhecido como "Biblioteca de Monteiro Lobato". Seu empenho em melhorar a qualidade da educação no Brasil o levou a defender mudanças no sistema educacional e a lutar por uma abordagem mais dinâmica e criativa no ensino.</p>
                </div>
            </div>
        </main>
    )
}