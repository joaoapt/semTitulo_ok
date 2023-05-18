import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main>
            <h1>Olá meu corrupito</h1>
            <div>
                <Link to='/publici/politico/getulio' className='botão-comunicar'>
                    Getulio
                </Link>
                <br/>
                <Link to='/publici/politico/juscelino' className='botão-comunicar'>
                    Juscelino
                </Link>
                <br/>
                <Link to='/publici/politico/marechal' className='botão-comunicar'>
                    Marechal
                </Link>
                <br/>
                <Link to='/publici/politico/lula' className='botão-comunicar'>
                    Lula
                </Link>
            </div>
        </main>
    )
}