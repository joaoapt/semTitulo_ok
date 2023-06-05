import './index.scss';
import { Link } from 'react-router-dom';
import Buscar from '../../../components/buscar';

export default function Index() {
    return(
        <main className='main-esportsta'>
            <nav><Buscar/></nav>
            <h1 className='titulo-pri'>ESPORTISTAS</h1>

<div className='conteiner'>
            <div className='local'>
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Senna</h1> 
                        <p className="title">Empresário e apresentador de televisão</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/esporte/senna' className='botão-comunicar'>
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
                        <h1 className='nome'>Guga</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/esporte/guga' className='botão-comunicar'>
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
                        <h1 className='nome'>Pele</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/esporte/pele' className='botão-comunicar'>
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
                        <h1 className='nome'>Socrates</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/esporte/socrates' className='botão-comunicar'>
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