import './index.scss';
import Buscar from '../../components/buscar';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main className='Home'>
            <nav><Buscar/></nav>
            <div className='conteiner-principal'>
                <div className='conteriner-secundario'>
                    <Link to='/categoria/comunicador'>
                        <div className='background-comunic'>
                            <h2>Comunicadores</h2>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/musicos' >
                        <div className='background-music'>
                            <h2>Músicos</h2>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/cientistas' >
                        <div className='background-cien'>
                            <h2>Cientistas</h2>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/esportes' >
                        <div className='background-espor'>
                            <h2>Esportistas</h2>
                        </div>
                    </Link>
                </div>
                <div className='conteriner-secundario'>
                    <Link to='/categoria/religioso' >
                        <div className='background-reli'>
                            <h2>Religiosos</h2>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/ativista' >
                        <div className='background-ativi'>
                            <h2>Ativistas</h2>
                        </div>
                    </Link>

                    <Link to='/categoria/politico' >
                        <div className='background-poli'>
                            <h2>Politicos</h2>
                        </div>
                    </Link>
                    
                    <Link to='/categoria/literarico' >
                        <div className='background-lite'>   
                            <h2>Literaricos</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}