import './index.scss';
import { Link } from 'react-router-dom';


export default function Index() {
    return(
        <main>
            <h1>Olá meu esporta</h1>
            <div>
                <Link to='/public/esporte/senna' className='botão-comunicar'>
                    Ayrtou Senna
                </Link>
                <br/>
                <Link to='/public/esporte/guga' className='botão-comunicar'>
                    GuGa
                </Link>
                <br/>
                <Link to='/public/esporte/pele' className='botão-comunicar'>
                    Pele
                </Link>
                <br/>
                <Link to='/public/esporte/socrates' className='botão-comunicar'>
                    Socrates
                </Link>
            </div>
        </main>
    )
}