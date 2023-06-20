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
            <Link  to='/public/esporte/pele' className="card">
                <img className='img-silvio' src='/img/pele.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Pelé</h1> 
                        <p className="title">Jogador de Futeboll</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/esporte/pele' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            
            <div className='local'>
            <Link  to='/public/esporte/guga' className="card">
                <img className='img-silvio' src='/img/guga.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Guga</h1> 
                        <p className="title">Tenista</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/esporte/guga' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/esporte/senna' className="card">
                <img className='img-silvio' src='/img/ayrton.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Senna</h1> 
                        <p className="title">Piloto de Formula 1</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/esporte/senna' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/esporte/maria-esther' className="card">
                <img className='img-silvio' src='/img/ve.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Maria Esther</h1> 
                        <p className="title">Tenista</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/esporte/maria-esther' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>
            <div className='local'>
            <Link to='/public/esporte/marta' className="card">
                <img className='img-silvio' src='/img/marta.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Marta</h1> 
                        <p className="title">Jogadora de Futeboll</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/esporte/marta' className='botão-comunicar'>
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