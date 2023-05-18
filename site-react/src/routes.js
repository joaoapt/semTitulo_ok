import { BrowserRouter, Routes, Route } from "react-router-dom";

//Páginas concluidas com Responsivo


//Páginas ok


//Páginas não ok
import Home from './pages/home';

import CatAtivista from './pages/categoria/ativistas'
import CatArtistas from './pages/categoria/artistas';
import CatCientistas from './pages/categoria/cientistas';
import CatEsportes from './pages/categoria/esportes';
import CatMusicos from  './pages/categoria/musicos';
import CatPolitico from './pages/categoria/politicos';
import CatLiteratura from './pages/categoria/literaricos';
import CatComunicador from './pages/categoria/comunicadores';

import PubAlmeida from './pages/publicação/ativistas/Almeida-Junior';
import PubIrmã from './pages/publicação/ativistas/Irmã-Dulce';
import PubLuiz from './pages/publicação/ativistas/Luiz-Gama';
import PubMarighella from './pages/publicação/ativistas/Marighellaa';
import PubZumbi from './pages/publicação/ativistas/Zumbi';

import PubAracy from './pages/publicação/cientistas/Aracy-Carvalho';
import PubRita from './pages/publicação/cientistas/Rita-Lobato';
import PubSantos from './pages/publicação/cientistas/Santos-Dummont';
import PubVirginia from './pages/publicação/cientistas/Virginia-Leoni';


import PubGloria from './pages/publicação/comunicador/Gloria-Maria';
import PubMaju from './pages/publicação/comunicador/Maju-Coltinho';
import PubMauricio from './pages/publicação/comunicador/Mauricio-Sousa';
import PubSilvio from './pages/publicação/comunicador/Silvio-Santos';

import PubSenna from './pages/publicação/esportes/Ayrtou_Senna';
import PubGuga from './pages/publicação/esportes/GuGa';
import PubPele from './pages/publicação/esportes/Pele';
import PubSocrates from './pages/publicação/esportes/Socrates';

import PubCarolina from './pages/publicação/literatura/Carolina-Maria-de-Jesus';
import PubCiarise from './pages/publicação/literatura/Ciarise';
import PubLima from './pages/publicação/literatura/Lima-Barreto';
import PubMontero from './pages/publicação/literatura/Montero-Lobato';
import PubPaulo from './pages/publicação/literatura/Paulo-Coelho';

import PubCarmem from './pages/publicação/musicos/Carmem-Miranda';
import PubCascao from './pages/publicação/musicos/Cascão';
import PubElza from './pages/publicação/musicos/Elza-Soares';
import PubMano from './pages/publicação/musicos/Mano-Brown';
import PubVila from './pages/publicação/musicos/Vila-Lobos';

import PubGetulio from './pages/publicação/politicos/Getulio-Vargas';
import PubJuscelino from './pages/publicação/politicos/Juscelino-K';
import PubLula from './pages/publicação/politicos/Lula';
import PubMarechal from './pages/publicação/politicos/Marechal-Deodoro';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
    
                <Route path="/categoria/artistas" element={<CatArtistas/>}/>
                <Route path="/categoria/ativistas" element={<CatAtivista/>}/>
                <Route path="/categoria/cientistas" element={<CatCientistas/>}/>
                <Route path="/categoria/esportes" element={<CatEsportes/>}/>
                <Route path="/categoria/musicos" element={<CatMusicos/>}/>
                <Route path="/categoria/politico" element={<CatPolitico/>}/>
                <Route path="/categoria/literarico" element={<CatLiteratura/>}/>
                <Route path="/categoria/comunicador" element={<CatComunicador/>}/>
                <Route path="/categoria/politico" element={<CatPolitico/>}/>
                <Route path="/categoria/literarico" element={<CatLiteratura/>}/>
                <Route path="/categoria/comunicador" element={<CatComunicador/>}/>

                <Route path="/public/ativistas/almeida" element={<PubAlmeida/>}/>
                <Route path="/public/ativistas/irma" element={<PubIrmã/>}/>
                <Route path="/public/ativistas/luiz" element={<PubLuiz/>}/>
                <Route path="/public/ativistas/marighella" element={<PubMarighella/>}/>
                <Route path="/public/ativistas/zunbi" element={<PubZumbi/>}/>

                <Route path="/public/cientista/santos" element={<PubSantos/>}/>
                <Route path="/public/cientista/virginia" element={<PubVirginia/>}/>
                <Route path="/public/cientista/aracy" element={<PubAracy/>}/>
                <Route path="/public/cientista/rita" element={<PubRita/>}/>
                
                <Route path="/public/comunicador/gloria" element={<PubGloria/>}/>
                <Route path="/public/comunicador/maju" element={<PubMaju/>}/>
                <Route path="/public/comunicador/mauricio" element={<PubMauricio/>}/>
                <Route path="/public/comunicador/silvio" element={<PubSilvio/>}/>
                
                <Route path="/public/esporte/senna" element={<PubSenna/>}/>
'               <Route path="/public/esporte/guga" element={<PubGuga/>}/>
                <Route path="/public/esporte/pele" element={<PubPele/>}/>
                <Route path="/public/esporte/socrates" element={<PubSocrates/>}/>

                <Route path="/public/literatura/carolina" element={<PubCarolina/>}/>
                <Route path="/public/literatura/ciarise" element={<PubCiarise/>}/>
                <Route path="/public/literatura/lima" element={<PubLima/>}/>
                <Route path="/public/literatura/montero" element={<PubMontero/>}/>
                <Route path="/public/literatura/paulo" element={<PubPaulo/>}/>

                <Route path="/public/musico/carmem" element={<PubCarmem/>}/>
                <Route path="/public/musico/cascao" element={<PubCascao/>}/>
                <Route path="/public/musico/elsa" element={<PubElza/>}/>
                <Route path="/public/musico/mano" element={<PubMano/>}/>
                <Route path="/public/musico/vila" element={<PubVila/>}/>

                <Route path="/publici/politico/getulio" element={<PubGetulio/>}/>
                <Route path="/publici/politico/juscelino" element={<PubJuscelino/>}/>
                <Route path="/publici/politico/lula" element={<PubLula/>}/>
                <Route path="/publici/politico/marechal" element={<PubMarechal/>}/>

            </Routes>
        </BrowserRouter>
    )
}
