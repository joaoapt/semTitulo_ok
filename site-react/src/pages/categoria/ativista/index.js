import './index.scss';
import { Link } from 'react-router-dom';
import Buscar from '../../../components/buscar';

export default function Index() {
    return(
        <main className='main-ativistas'>
            <div className='conteiner'>
            <nav><Buscar/></nav>
            <h1 className='titulo-pri'>ATIVISTAS</h1>

                <div className='local'>
                <div className="card">
                    <img className='img-silvio' src='/img/silvio.png' alt=''/>
                    <div  className='local-escrita'>
                        <div className='sobre'>
                            <h1 className='nome'>Almeida</h1> 
                            <p className="title">Empresário e apresentador de televisão</p>
                        </div>
                        <div className='botão-local'>
                            <Link  to='/public/ativistas/almeida' className='botão-comunicar'>
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
                            <h1 className='nome'>Luiz Gama</h1> 
                            <p className="title">Jornalista</p>
                        </div>
                        <div className='botão-local'>
                            <Link  to='/public/ativistas/luiz' className='botão-comunicar'>
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
                            <h1 className='nome'>Marighellaa</h1> 
                            <p className="title">Jornalista</p>
                        </div>
                    <div className='botão-local'>
                            <Link to='/public/ativistas/marighella' className='botão-comunicar'>
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
                            <h1 className='nome'>Zumbi</h1> 
                            <p className="title">Cartunista</p>
                        </div>
                        <div className='botão-local'>
                            <Link to='/public/ativistas/zunbi' className='botão-comunicar'>
                                <p>ver sobre</p>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </main>
    )
}