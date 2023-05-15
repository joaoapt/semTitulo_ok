import { BrowserRouter, Routes, Route } from "react-router-dom";

//Páginas concluidas com Responsivo


//Páginas ok


//Páginas não ok
import Home from './pages/home';
import Cat_basic from './pages/categoria/basic';
import Cat_ativista from './pages/categoria/ativistas'
import Cat_artistas from './pages/categoria/artistas';
import Cat_cientistas from './pages/categoria/cientistas';
import Cat_esportes from './pages/categoria/esportes';
import Cat_musicos from  './pages/categoria/musicos';
import Cat_politico from './pages/categoria/politicos';
import Cat_literatura from './pages/categoria/literaricos';
import Cat_comunicador from './pages/categoria/comunicadores';

import Pub_almeida from './pages/publicação/ativistas/Almeida-Junior';
import Pub_irmã from './pages/publicação/ativistas/Irmã-Dulce';
import Pub_luiz from './pages/publicação/ativistas/Luiz-Gama';
import Pub_marighella from './pages/publicação/ativistas/Marighellaa';
import Pub_zumbi from './pages/publicação/ativistas/Zumbi';

import Pub_aracy from './pages/publicação/cientistas/Aracy-Carvalho';
import Pub_rita from './pages/publicação/cientistas/Rita-Lobato';
import Pub_Santos from './pages/publicação/cientistas/Santos-Dummont';
import Pub_virginia from './pages/publicação/cientistas/Virginia-Leoni';

import Pub_gaules from './pages/publicação/comunicador/Gaules';
import Pub_gloria from './pages/publicação/comunicador/Gloria-Maria';
import Pub_maju from './pages/publicação/comunicador/Maju-Coltinho';
import Pub_mauricio from './pages/publicação/comunicador/Mauricio-Sousa';
import Pub_silvio from './pages/publicação/comunicador/Silvio-Santos';

import Pub_senna from './pages/publicação/esportes/Ayrtou_Senna';
import Pub_guga from './pages/publicação/esportes/GuGa';
import Pub_pele from './pages/publicação/esportes/Pele';
import Pub_socrates from './pages/publicação/esportes/Socrates';

import Pub_carolina from './pages/publicação/literatura/Carolina-Maria-de-Jesus';
import Pub_ciarise from './pages/publicação/literatura/Ciarise';
import Pub_lima from './pages/publicação/literatura/Lima-Barreto';
import Pub_montero from './pages/publicação/literatura/Montero-Lobato';
import Pub_paulo from './pages/publicação/literatura/Paulo-Coelho';

import Pub_carmem from './pages/publicação/musicos/Carmem-Miranda';
import Pub_cascao from './pages/publicação/musicos/Cascão';
import Pub_elza from './pages/publicação/musicos/Elza-Soares';
import Pub_mano from './pages/publicação/musicos/Mano-Brown';
import Pub_vila from './pages/publicação/musicos/Vila-Lobos';

import Pub_getulio from './pages/publicação/politicos/Getulio-Vargas';
import Pub_juscelino from './pages/publicação/politicos/Juscelino-K';
import Pub_lula from './pages/publicação/politicos/Lula';
import Pub_marechal from './pages/publicação/politicos/Marechal-Deodoro';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                
                <Route path="/categoria" element={<Cat_basic/>}/>
                <Route path="/categoria/artistas" element={<Cat_artistas/>}/>
                <Route path="/categoria/ativistas" element={<Cat_ativista/>}/>
                <Route path="/categoria/cientistas" element={<Cat_cientistas/>}/>
                <Route path="/categoria/esportes" element={<Cat_esportes/>}/>
                <Route path="/categoria/musicos" element={<Cat_musicos/>}/>
                <Route path="/categoria/politico" element={<Cat_politico/>}/>
                <Route path="/categoria/lituratura" element={<Cat_literatura/>}/>
                <Route path="/categoria/comunicador" element={<Cat_comunicador/>}/>

                <Route path="/public/ativista/almeida" element={<Pub_almeida/>}/>
                <Route path="/public/ativista/Irmã" element={<Pub_irmã/>}/>
                <Route path="/public/ativista/luiz" element={<Pub_luiz/>}/>
                <Route path="/public/ativista/marighella" element={<Pub_marighella/>}/>
                <Route path="/public/ativista/zumbi" element={<Pub_zumbi/>}/>
                
                <Route path="/public/cientista/aracy" element={<Pub_aracy/>}/>
                <Route path="/public/cientista/rita" element={<Pub_rita/>}/>
                <Route path="/public/cientista/santos" element={<Pub_Santos/>}/>
                <Route path="/public/cientista/virginia" element={<Pub_virginia/>}/>

                <Route path="/public/comunicador/Gaules" element={<Pub_gaules/>}/>
                <Route path="/public/comunicador/gloria" element={<Pub_gloria/>}/>
                <Route path="/public/comunicador/maju" element={<Pub_maju/>}/>
                <Route path="/public/comunicador/mauricio" element={<Pub_mauricio/>}/>
                <Route path="/public/comunicador/silvio" element={<Pub_silvio/>}/>
                
                <Route path="/public/esporte/senna" element={<Pub_senna/>}/>
'               <Route path="/public/esporte/guga" element={<Pub_guga/>}/>
                <Route path="/public/esporte/pele" element={<Pub_pele/>}/>
                <Route path="/public/esporte/socrates" element={<Pub_socrates/>}/>

                <Route path="/public/literatura/carolina" element={<Pub_carolina/>}/>
                <Route path="/public/literatura/ciarise" element={<Pub_ciarise/>}/>
                <Route path="/public/literatura/lima" element={<Pub_lima/>}/>
                <Route path="/public/literatura/montero" element={<Pub_montero/>}/>
                <Route path="/public/literatura/paulo" element={<Pub_paulo/>}/>

                <Route path="/public/musico/carmem" element={<Pub_carmem/>}/>
                <Route path="/public/musico/cascao" element={<Pub_cascao/>}/>
                <Route path="/public/musico/elsa" element={<Pub_elza/>}/>
                <Route path="/public/musico/mano" element={<Pub_mano/>}/>
                <Route path="/public/musico/vila" element={<Pub_vila/>}/>

                <Route path="/publici/politico/getulio" element={<Pub_getulio/>}/>
                <Route path="/publici/politico/juscelino" element={<Pub_juscelino/>}/>
                <Route path="/publici/politico/lula" element={<Pub_lula/>}/>
                <Route path="/publici/politico/marechal" element={<Pub_marechal/>}/>

            </Routes>
        </BrowserRouter>
    )
}
