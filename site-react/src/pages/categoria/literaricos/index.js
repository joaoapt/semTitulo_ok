import './index.scss';
import { Link } from 'react-router-dom';
import Buscar from '../../../components/buscar';

export default function Index() {
    return(
        <main className='main-literario'>
            <nav><Buscar/></nav>
            <h1 className='titulo-pri'>LITERARICOS</h1>

<div className='conteiner'>
            <div className='local'>
            <Link  to='/public/literatura/carolina' className="card">
                <img className='img-silvio' src='/img/ca.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Carolina</h1> 
                        <p className="title">Escritora Favelada</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/literatura/carolina' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            
            <div className='local'>
            <Link  to='/public/literatura/clarise' className="card">
                <img className='img-silvio' src='/img/clarise.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Clarice Lispector</h1> 
                        <p className="title">Escritora e Jornalista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/literatura/clarise' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/literatura/oscar-niemeyer' className="card">
                <img className='img-silvio' src='/img/oscar-niemayer.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Oscar Niemeyer</h1> 
                        <p className="title">Arquiteto</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/literatura/oscar-niemeyer' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/literatura/montero' className="card">
                <img className='img-silvio' src='/img/mt.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Montero Lobato</h1> 
                        <p className="title">Escritor e Editor</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/literatura/montero' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>
           </div> 

           <br/> <br/> <br/> <br/>
        </main>
    )
}