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
                        <h1 className='nome'>Silvio Santos</h1> 
                        <p className="title">Empresário e apresentador de televisão</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/comunicador/silvio' className='botão-comunicar'>
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
                        <h1 className='nome'>Gloria Maria</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/comunicador/gloria' className='botão-comunicar'>
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
                        <h1 className='nome'>Maria Júlia Coutinho</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/comunicador/maju' className='botão-comunicar'>
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
                        <h1 className='nome'>Mauricio de Sousa</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/comunicador/mauricio' className='botão-comunicar'>
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