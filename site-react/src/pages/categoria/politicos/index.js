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
            <Link  to='/publici/politico/getulio' className="card">
                <img className='img-silvio' src='/img/getulio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Getulio Vargas</h1> 
                        <p className="title">Ex-presidente</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/publici/politico/getulio' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            
            <div className='local'>
            <Link  to='/publici/politico/juscelino' className="card">
                <img className='img-silvio' src='/img/JK.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Juscelino</h1> 
                        <p className="title">Ex-presidente</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/publici/politico/juscelino' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/publici/politico/lula' className="card">
                <img className='img-silvio' src='/img/lula.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Lula</h1> 
                        <p className="title">Presidente</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/publici/politico/lula' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/publici/politico/marechal' className="card">
                <img className='img-silvio' src='/img/marechal-deodoro.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Marechal</h1> 
                        <p className="title">Ex-presidente</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/publici/politico/marechal' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/publici/politico/dilma' className="card">
                <img className='img-silvio' src='/img/dilma.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Dilma Rousseff</h1> 
                        <p className="title">Ex-presidenta</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/publici/politico/dilma' className='botão-comunicar'>
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