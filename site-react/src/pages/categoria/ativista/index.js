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
                <Link  to='/public/ativistas/rita-lobo' className="card">
                    <img className='img-silvio' src='/img/RitaLoba.png' alt=''/>
                    <div  className='local-escrita'>
                        <div className='sobre'>
                            <h1 className='nome'>Rita Loba</h1> 
                            <p className="title">Femilista</p>
                        </div>
                        <div className='botão-local'>
                            <Link  to='/public/ativistas/rita-lobo' className='botão-comunicar'>
                                <p>ver sobre</p>
                            </Link>
                        </div>
                    </div>
                </Link>
                </div>

                
                <div className='local'>
                <Link  to='/public/ativistas/luiz-gama' className="card">
                    <img className='img-silvio' src='/img/gama.png' alt=''/>
                    <div  className='local-escrita'>
                        <div className='sobre'>
                            <h1 className='nome'>Luiz Gama</h1> 
                            <p className="title">Jornalista e Advogado</p>
                        </div>
                        <div className='botão-local'>
                            <Link  to='/public/ativistas/luiz-gama' className='botão-comunicar'>
                                <p>ver sobre</p>
                            </Link>
                        </div>
                    </div>
                </Link>
                </div>

                <div className='local'>
                <Link to='/public/ativistas/marighella' className="card">
                    <img className='img-silvio' src='/img/marighella.png' alt=''/>
                    <div  className='local-escrita'>
                        <div className='sobre'>    
                            <h1 className='nome'>Marighellaa</h1> 
                            <p className="title">Líder Comunista</p>
                        </div>
                    <div className='botão-local'>
                            <Link to='/public/ativistas/marighella' className='botão-comunicar'>
                                <p>ver sobre</p>
                            </Link>
                    </div>
                    </div>
                </Link>
                </div>

                <div className='local'>
                <Link to='/public/ativistas/zunbi' className="card">
                    <img className='img-silvio' src='/img/zumbi.png' alt=''/>
                    <div className='local-escrita'>    
                        <div className='sobre'>
                            <h1 className='nome'>Zumbi</h1> 
                            <p className="title">Líder Quilombola</p>
                        </div>
                        <div className='botão-local'>
                            <Link to='/public/ativistas/zunbi' className='botão-comunicar'>
                                <p>ver sobre</p>
                            </Link>
                        </div>
                    </div>
                </Link>
                </div>
                <div className='local'>
            <Link to='/public/ativistas/paulo-freire' className="card">
                <img className='img-silvio' src='/img/Paulo-Freire.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Paulo Freire</h1> 
                        <p className="title"></p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/ativistas/paulo-freire' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>
                <br/><br/><br/><br/>
            </div> 
        </main>
    )
}