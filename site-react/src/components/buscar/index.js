import './index.scss';
import { Link } from 'react-router-dom';


export default function Index (){
    return(
        <nav className='buscar'>
            <div className='cont-logo'>
                <Link to='/'>
                    <img className='logo' src="/img/piintoo.png" alt='logo'/>
                </Link>
                <Link to='/'className='titulo'>
                    <h1 className='titulo-logo'>Narrativas Brasileiras</h1>
                </Link>
            </div>
        </nav>
    )
}