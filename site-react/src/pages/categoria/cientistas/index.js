import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main>
            <h1>Olá meu cientista</h1>
            <div>
                <Link to='/public/cientista/aracy' className='botão-comunicar'>
                    Aracy
                </Link>
                <br/>
                <Link to='/public/cientista/rita' className='botão-comunicar'>
                    Rita
                </Link>
                <br/>
                <Link to='/public/cientista/santos' className='botão-comunicar'>
                    Santos
                </Link>
                <br/>
                <Link to='/public/cientista/virginia' className='botão-comunicar'>
                    Virginia
                </Link>
            </div>
        </main>
    )
}