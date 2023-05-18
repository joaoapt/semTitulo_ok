import './index.scss';
import { Link } from 'react-router-dom';


export default function Index() {
    return(
        <main>
            <h1>Olá meu ativista</h1>
            <div>
                <Link to='/public/ativistas/almeida' className='botão-comunicar'>
                    Almeida
                </Link>
                <br/>
                <Link to='/public/ativistas/irma' className='botão-comunicar'>
                    Irmã Dulce
                </Link>
                <br/>
                <Link to='/public/ativistas/luiz' className='botão-comunicar'>
                    Luiz
                </Link>
                <br/>
                <Link to='/public/ativistas/marighella' className='botão-comunicar'>
                    Marighella
                </Link>
                <br/>
                <Link to='/public/ativistas/zunbi' className='botão-comunicar'>
                    Zunbi
                </Link>
            </div>
        </main>
    )
}