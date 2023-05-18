import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main>
            <h1>Olá meu comunicador</h1>
            <div>
                <Link to='/public/comunicador/silvio' className='botão-comunicar'>
                    Silvio Santos
                </Link>
                <br/>
                <Link to='/public/comunicador/gloria' className='botão-comunicar'>
                    Gloria Maria
                </Link>
                <br/>
                <Link to='/public/comunicador/maju' className='botão-comunicar'>
                    Maria Júlia Coutinho
                </Link>
                <br/>
                <Link to='/public/comunicador/mauricio' className='botão-comunicar'>
                    Mauricio de Sousa
                </Link>
            </div>
        </main>
    )
}