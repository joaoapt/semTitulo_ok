import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <footer className='rodape-'>
            <div className='conterne-rodap'>
             
             <div  className='logo-local'>
                <Link to='/'> 
                    <img className='logo' src="/img/piintoo.png" alt='logo'/>
                </Link>
            </div>   
            
            <div className='texto-roda'>
                <h1 className='titulo-roda'>Início</h1>
                
                <Link to='/' className='aa'>
                    <p className='sub-roda'>Home</p>
                </Link>
                <Link to='/' className='aa'>
                    <p className='sub-roda'>Motivos</p>
                </Link>
                <Link to='/' className='aa'>
                    <p className='sub-roda'>Criação</p>
                </Link>
            </div>
            <div className='texto-roda'>
                <h1 className='titulo-roda'>Categoria</h1>
                 
                <Link to='/' className='aas'>
                    <p className='sub-roda'>Ativistas</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p className='sub-roda'>Artistas</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p className='sub-roda'>Cientistas</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p className='sub-roda'>Comunicadores</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p className='sub-roda'>Musicos</p>
                </Link> 
                <Link to='/' className='aas'>
                    <p className='sub-roda'>Politicos</p>
                </Link> 
            </div>
            <div className='texto-roda'>
                <h1 className='titulo-roda'>Contatos</h1>
                <div className='git-img'>
                    <Link className='git' to=''> <img className='git-k' src='/img/insta.png' alt='insta'/></Link>
                    <Link className='git' to='https://github.com/joaoapt/semTitulo_ok.git'> <img className='git-k' src='/img/git.png' alt='git'/></Link>
                </div>
            </div>
        </div>
    </footer>
)}