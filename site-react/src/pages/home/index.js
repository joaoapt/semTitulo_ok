import './index.scss';
import Buscar from '../../components/buscar';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main className='Home'>
            <nav><Buscar/></nav>
            <div className='conteiner-principal'>
                <div className='conteriner-primario'>
                    <Link to='/categoria/comunicador'>
                        <div className='background-comunic'>
                            <h3 className='nome-classcc'>Comunicadores</h3>
                            <img className='img-comunicador' src='/img/silvio.png ' alt=''/>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/musicos' >
                        <div className='background-music'>
                            <h2 className='nome-class'>Músicos</h2>
                            <img className='img-musicos' src='/img/mano.png' alt=''/>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/cientistas' >
                        <div className='background-cien'>
                            <h2 className='nome-class'>Cientistas</h2>
                            <img className='img-cien' src='/img/santos.png' alt=''/>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/esportes' >
                        <div className='background-espor'>
                            <h2 className='nome-class'>Esportistas</h2>
                            <img className='img-es' src='/img/pele.png' alt=''/>
                        </div>
                    </Link>
                </div>
                <div className='conteriner-secundario'>
                    <Link to='/categoria/religioso' >
                        <div className='background-reli'>
                            <h2 className='nome-class'>Religiosos</h2>
                            <img className='img-home' src='/img/duce.png' alt=''/>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/ativista' >
                        <div className='background-ativi'>
                            <h2 className='nome-class'>Ativistas</h2>
                            <img className='img-home' src='/img/aracyc.png' alt=''/>
                        </div>
                    </Link>

                    <Link to='/categoria/politico' >
                        <div className='background-poli'>
                            <h2 className='nome-class'>Politicos</h2>
                            <img className='img-home' src='/img/getulio.png' alt=''/>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/literarico' >
                        <div className='background-lite'>   
                            <h2 className='nome-class'>Literaricos</h2>
                            <img className='img-lite' src='/img/ca.png' alt=''/>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}