import './index.scss';
import Buscar from '../../components/buscar';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main className='Home'>
            <nav><Buscar/></nav>
            <div className='conteiner-principal'>
            
                <div className='conteriner-primario'>
                    <div className='divisão'>
                        <Link to='/categoria/ativista' >
                            <div className='background-ativi'>
                                <h2 className='nome-class'>Ativistas</h2>
                                <img className='img' src='/img/RitaLoba.png' alt=''/>
                            </div>
                        </Link>
                        <div className='bloco-in'></div>                        
                        <Link to='/categoria/comunicador'>
                            <div className='background-comunic'>
                                <h2 className='nome-classcc'>Comunicadores</h2>
                                <img className='img' src='/img/silvio.png ' alt=''/>
                            </div>
                        </Link>
                    </div>
                    <div className='divisão'>
                        <Link to='/categoria/esportes' >
                        <div className='background-espor'>
                            <h2 className='nome-class'>Esportistas</h2>
                            <img className='img' src='/img/pele.png' alt=''/>
                        </div>
                        </Link>
                        <div className='bloco-in'></div>
                        <Link to='/categoria/literarico' >
                            <div className='background-lite'>   
                                <h2 className='nome-class'>Literaricos</h2>
                                <img className='img' src='/img/ca.png' alt=''/>
                            </div>
                        </Link>
                    </div>
                    <div className='divisão'>
                        <Link to='/categoria/musicos' >
                            <div className='background-music'>
                                <h2 className='nome-class'>Músicos</h2>
                                <img className='img' src='/img/mano.png' alt=''/>
                            </div>
                        </Link>
                        <div className='bloco-in'></div>
                        <Link to='/categoria/politico' >
                            <div className='background-poli'>
                                <h2 className='nome-class'>Politicos</h2>
                                <img className='img' src='/img/getulio.png' alt=''/>
                            </div>
                        </Link>  
                    </div>

                    <div className='divisão'>    
                        <Link to='/categoria/religioso' >
                            <div className='background-reli'>
                                <h2 className='nome-class'>Religiosos</h2>
                                <img className='img' src='/img/duce.png' alt=''/>
                            </div>
                        </Link>
                        <div className='bloco-in'></div>
                    </div>       
                </div>
            </div>
        </main>
    )
}