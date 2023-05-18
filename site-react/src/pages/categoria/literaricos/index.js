import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main>
            <h1>Olá meu escritor</h1>
            <div>
                <Link to='/public/literatura/carolina' className='botão-comunicar'>
                    Carolina
                </Link>
                <br/>
                <Link to='/public/literatura/ciarise' className='botão-comunicar'>
                    Ciarise
                </Link>
                <br/>
                <Link to='/public/literatura/lima' className='botão-comunicar'>
                    Lima
                </Link>
                <br/>
                <Link to='/public/literatura/montero' className='botão-comunicar'>
                    Montero
                </Link>
                <br/>
                <Link to='/public/literatura/paulo' className='botão-comunicar'>
                    Paulo Coelho
                </Link>
            </div>
        </main>
    )
}