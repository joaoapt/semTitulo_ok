import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <footer className='rodape'>
            <div className='conterne-rodapé'>
             
             <div  className='logo-local'>
                <Link to='/'> 
                    <img className='logo' src="/img/piintoo.png" alt='logo'/>
                </Link>
            </div>   
            
            <div className='texto-rodapé'>
                <h1>Início</h1>
                
                <Link to='/' className='aa'>
                    <p>Home</p>
                </Link>
                <Link to='/' className='aa'>
                    <p>Motivos</p>
                </Link>
                <Link to='/' className='aa'>
                    <p>Criação</p>
                </Link>
            </div>
            <div className='texto-rodapé'>
                <h1>Categoria</h1>
                 
                <Link to='/' className='aas'>
                    <p>Ativistas</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p>Artistas</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p>Cientistas</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p>Comunicadores</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p>Musicos</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p>Politicos</p>
                </Link> 
            </div>
            <div className='texto-rodapé'>
                <h1>Contatos</h1>
                <div className='git-img'>
                    <Link className='git' to=''> <img className='git-k' src='/img/insta.png' alt='insta'/></Link>
                    <Link className='git' to='https://github.com/joaoapt/semTitulo_ok.git'> <img className='git-k' src='/img/git.png' alt='git'/></Link>
                </div>
            </div>
        </div>
    </footer>
)}