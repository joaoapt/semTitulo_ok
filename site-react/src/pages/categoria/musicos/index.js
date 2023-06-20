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
            <Link  to='/public/musico/mano-brown' className="card">
                <img className='img-silvio' src='/img/mano.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Mano Brown</h1> 
                        <p className="title">Raper</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/musico/mano-brown' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/musico/ferrez' className="card">
                <img className='img-silvio' src='/img/ferrez.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Ferrez</h1> 
                        <p className="title">Raper</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/musico/ferrez' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </Link>
            </div>
            <div className='local'>
            <Link to='/public/musico/elsa' className="card">
                <img className='img-silvio' src='/img/Elza.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Elza Soares</h1> 
                        <p className="title">Samba e Jazz</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/musico/elsa' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </Link>
            </div>
            <div className='local'>
            <Link to='/public/musico/gabriel-o-pensador' className="card">
                <img className='img-silvio' src='/img/gabriel-O.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Gabriel o Pensador</h1> 
                        <p className="title">Raper</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/musico/gabriel-o-pensador' className='botão-comunicar'>
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