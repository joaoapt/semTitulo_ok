import './index.scss';
import { Link } from 'react-router-dom';
import Buscar from '../../../components/buscar';

export default function Index() {
    return(
        <main className='main-musico'>
            <nav><Buscar/></nav>
            <h1 className='titulo-pri'>MÚSICOS</h1>

<div className='conteiner'>
            <div className='local'>
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Carmem</h1> 
                        <p className="title">Empresário e apresentador de televisão</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/musico/carmem' className='botão-comunicar'>
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
                        <h1 className='nome'>Cascão</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/musico/cascao' className='botão-comunicar'>
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
                        <h1 className='nome'>Elsa</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/musico/elsa' className='botão-comunicar'>
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
                        <h1 className='nome'>Mano Brown</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/musico/mano' className='botão-comunicar'>
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
                        <h1 className='nome'>Vila Lobos</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/musico/vila' className='botão-comunicar'>
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