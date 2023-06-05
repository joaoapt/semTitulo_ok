import './index.scss';
import { Link } from 'react-router-dom';
import Buscar from '../../../components/buscar';

export default function Index() {
    return(
        <main className='main-politico'>
            <nav><Buscar/></nav>
            <h1 className='titulo-pri'>POLITICOS</h1>

<div className='conteiner'>
            <div className='local'>
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Getulio Vargas</h1> 
                        <p className="title">Empresário e apresentador de televisão</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/publici/politico/getulio' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>

            
            <div className='local'>
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Juscelino</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/publici/politico/juscelino' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>

            <div className='local'>
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Lula</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/publici/politico/lula' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </div>
            </div>

            <div className='local'>
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Marechal</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/publici/politico/marechal' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
           </div> 

           <br/> <br/> <br/> <br/>
        </main>
    )
}