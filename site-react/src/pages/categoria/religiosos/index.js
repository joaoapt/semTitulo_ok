import './index.scss';
import { Link } from 'react-router-dom';
import Buscar from '../../../components/buscar';

export default function Index() {
    return(
        <main className='main-religiao'>
            <nav><Buscar/></nav>
            <h1 className='titulo-pri'>RELIGIOSOS</h1>

<div className='conteiner'>
            <div className='local'>
            <Link  to='/public/religiao/irma-duce' className="card">
                <img className='img-silvio' src='/img/duce.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'>Irmã Dulce</h1> 
                        <p className="title">Freira</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/religiao/irma-duce' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            
            <div className='local'>
            <Link  to='/public/religiao/mae' className="card">
                <img className='img-silvio' src='/img/mae.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>
                        <h1 className='nome'> Mãe Menininha</h1> 
                        <p className="title">Ialorixá (mãe-de-santo)</p>
                    </div>
                    <div className='botão-local'>
                        <Link  to='/public/religiao/mae' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                    </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/religiao/chico' className="card">
                <img className='img-silvio' src='/img/chico.png' alt=''/>
                <div  className='local-escrita'>
                    <div className='sobre'>    
                        <h1 className='nome'>Chico Xavier</h1> 
                        <p className="title"> Médium e Filantropo</p>
                    </div>
                   <div className='botão-local'>
                        <Link to='/public/religiao/chico' className='botão-comunicar'>
                            <p>ver sobre</p>
                        </Link>
                   </div>
                </div>
            </Link>
            </div>

            <div className='local'>
            <Link to='/public/religiao/helder' className="card">
                <img className='img-silvio' src='/img/don.png' alt=''/>
                <div className='local-escrita'>    
                    <div className='sobre'>
                        <h1 className='nome'>Hélder Câmara</h1> 
                        <p className="title">Bispo Católico</p>
                    </div>
                    <div className='botão-local'>
                        <Link to='/public/religiao/helder' className='botão-comunicar'>
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