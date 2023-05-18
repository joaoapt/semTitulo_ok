import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main>
            <h1>Olá meu musico</h1>
            <div>
                <Link to='/public/musico/carmem' className='botão-comunicar'>
                    Carmem Miranda
                </Link>
                <br/>
                <Link to='/public/musico/cascao' className='botão-comunicar'>
                    Cascão
                </Link>
                <br/>
                <Link to='/public/musico/elsa' className='botão-comunicar'>
                    Elza Sousa
                </Link>
                <br/>
                <Link to='/public/musico/mano' className='botão-comunicar'>
                    Mano Brown
                </Link>
                <Link to='/public/musico/vila' className='botão-comunicar'>
                    Vila Lobos
                </Link>
            </div>
        </main>
    )
}