import './index.scss';
import { Link } from 'react-router-dom';
//import { Scrollbars } from 'react-custom-scrollbars-2';
//import { useState } from 'react';


export default function Index (){
    
    // const [menu, setMenu] = useState(false);
    // const [animationState, setAnimationState] = useState({
    //     isStopped: false, isPaused: false,
    //     direction: 1,
    //   });
    
    //   const defaultOptions = {
    //     loop: false,
    //     autoplay: false, 
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };
    

    // function simOUnão() {
    //     if(menu === false){setMenu(true)
    //     }
    //     else if(menu === true){
    //         setMenu(false)
    //     }
    // }


    return(
        <nav className='buscar'>
            <div className='menu-m'>
                <img className='menu' src="/img/menu.png" alt='menu'/>
            </div>
            <div className='cont-logo'>
                <Link to='/'>
                    <img className='logo' src="/img/piintoo.png" alt='logo'/>
                </Link>
                <Link to='/'className='titulo'>
                    <h1>Ícones Brasil</h1>
                </Link>
            </div>
        </nav>
    )
}