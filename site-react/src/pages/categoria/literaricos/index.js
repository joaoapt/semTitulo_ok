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
            <div className="card">
                <img className='img-silvio' src='/img/silvio.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Carolina</h1> 
                        <p className="title">Empresário e apresentador de televisão</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/literatura/carolina' className='botão-comunicar'>
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
                        <h1 className='nome'>Ciarise</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/literatura/ciarise' className='botão-comunicar'>
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
                        <h1 className='nome'>Lima</h1> 
                        <p className="title">Jornalista</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/literatura/lima' className='botão-comunicar'>
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
                        <h1 className='nome'>Montero Lobato</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/literatura/montero' className='botão-comunicar'>
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
                        <h1 className='nome'>Paulo Coelho</h1> 
                        <p className="title">Cartunista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/literatura/paulo' className='botão-comunicar'>
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