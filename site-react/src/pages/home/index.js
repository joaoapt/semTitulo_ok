import './index.scss';
import Rodape from '../../components/Roda-pe';
import Buscar from '../../components/buscar';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main className='Home'>
            <nav><Buscar/></nav>
            <br/><br/><br/><br/><br/>
            <div>
                <div>
                    <Link to='/categoria/comunicador' className='botão-comunicar'>
                        Comunicadores
                    </Link>
                    <br/>
                    <Link to='/categoria/musicos' className='botão-comunicar'>
                        Músicos
                    </Link>
                    <br/>
                    <Link to='/categoria/cientistas' className='botão-comunicar'>
                        Cientistas
                    </Link>
                    <br/>
                    <Link to='/categoria/esportes' className='botão-comunicar'>
                        Esportistas
                    </Link>
                </div>
                <br/>
                <div>
                    <Link to='/categoria/artistas' className='botão-comunicar'>
                        Artistas
                    </Link>
                    <br/>
                    <Link to='/categoria/ativistas' className='botão-comunicar'>
                        Ativistas
                    </Link>
                    <br/>
                    <Link to='/categoria/politico' className='botão-comunicar'>
                        Politicos
                    </Link>
                    <br/>
                    <Link to='/categoria/literarico' className='botão-comunicar'>
                        Literaricos
                    </Link>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <footer><Rodape/></footer>
        </main>
    )
}