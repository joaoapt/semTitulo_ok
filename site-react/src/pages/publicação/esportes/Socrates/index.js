import './index.scss';
import '../../../../App.css'
import Buscar from '../../../../components/buscar';

export default function Index() {
    return(
        <main className='gloria'>
            <nav><Buscar/></nav>
            <div className='conteudo'>
                <div>
                    <h1 className='titulo-texto'>A ventureira</h1>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Marta Vieira ou Rainha Marta, Nascida no município de Dois Riachos, em Alagoas, no dia 19 de fevereiro de 1986 é a principal jogadora de futebol do mundo e atua em campo na posição de atacante. </p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'> Mesmo a atleta tendo uma infância humilde e sofrendo todas as pressões do machismo dentro dos campos de futebol, se tornou mundialmente reconhecida recebendo 6 vezes o prêmio de melhor do mundo.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'> Apesar do futebol feminino já existir, ela deu um toque todo especial mostrando ao mundo o poder que  também pode se observar num jogo entre mulheres. </p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>A jogadora usa a sua influência para falar principalmente de causas femininas, lutando pela inclusão e pelos direitos das mulheres, como por exemplo a igualdade salarial, que ainda é um grande problema nos dias atuais.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Alguns feitos da Rainha:
Superou o Pelé em número de gols realizados com a camisa da seleção brasileira.
Ultrapassou o número de prêmios de Cristiano Ronaldo e Messi.
É primeira mulher a entrar no hall da fama no Maracanã.
É embaixadora da Boa Vontade da ONU Mulheres.
Assumiu publicamente sua relação com a jogadora de futebol Toni Deion, em 2019.</p>
                </div>
                <div  className='sub-lol'>
                    <p className='sub-texto'>Com tudo isso, concluímos que a Marta possui uma grande importância na representatividade feminina, mesmo sendo pouco reconhecida.</p>
                </div>
            </div>
        </main>
    )
}