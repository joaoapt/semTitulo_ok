import { BrowserRouter, Routes, Route } from "react-router-dom";

//Páginas concluidas com Responsivo


//Páginas ok


//Páginas não ok
import Home from './pages/home';

import CatAtivista from './pages/categoria/ativista'
import CatReligiosos from './pages/categoria/religiosos';
import CatCientistas from './pages/categoria/cientistas';
import CatEsportes from './pages/categoria/esportes';
import CatMusicos from  './pages/categoria/musicos';
import CatPolitico from './pages/categoria/politicos';
import CatLiteratura from './pages/categoria/literaricos';
import CatComunicador from './pages/categoria/comunicadores';

import PubPaulo from './pages/publicação/ativistas/Paulo-Freire';
import PubRitaB from './pages/publicação/ativistas/Rita-Lobato';
import PubLuiz from './pages/publicação/ativistas/Luiz-Gama';
import PubMarighella from './pages/publicação/ativistas/Marighellaa';
import PubZumbi from './pages/publicação/ativistas/Zumbi';

import PubGloria from './pages/publicação/comunicador/Gloria-Maria';
import PubMaju from './pages/publicação/comunicador/Maju-Coltinho';
import PubMauricio from './pages/publicação/comunicador/Mauricio-Sousa';
import PubSilvio from './pages/publicação/comunicador/Silvio-Santos';

import PubSenna from './pages/publicação/esportes/Ayrtou_Senna';
import PubGuga from './pages/publicação/esportes/GuGa';
import PubPele from './pages/publicação/esportes/Pele';
import PubSocrates from './pages/publicação/esportes/Socrates';
import PubMaria from './pages/publicação/esportes/maria'

import PubCarolina from './pages/publicação/literatura/Carolina-Maria-de-Jesus';
import PubCiarise from './pages/publicação/literatura/Ciarise';
import PubLima from './pages/publicação/literatura/Lima-Barreto';
import PubMontero from './pages/publicação/literatura/Montero-Lobato';

import PubCascao from './pages/publicação/musicos/Cascão';
import PubElza from './pages/publicação/musicos/Elza-Soares';
import PubMano from './pages/publicação/musicos/Mano-Brown';
import PubVila from './pages/publicação/musicos/Vila-Lobos';

import PubGetulio from './pages/publicação/politicos/Getulio-Vargas';
import PubJuscelino from './pages/publicação/politicos/Juscelino-K';
import PubLula from './pages/publicação/politicos/Lula';
import PubDilma from './pages/publicação/politicos/dilma';
import PubMarechal from './pages/publicação/politicos/Marechal-Deodoro';

import PubIrmã from './pages/publicação/religiao/irma';
import PubMae from './pages/publicação/religiao/mae';
import PubChico from './pages/publicação/religiao/chico';
import PubDon from './pages/publicação/religiao/don';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
    
                <Route path="/categoria/religioso" element={<CatReligiosos/>}/>
                <Route path="/categoria/ativista" element={<CatAtivista/>}/>
                <Route path="/categoria/cientistas" element={<CatCientistas/>}/>
                <Route path="/categoria/esportes" element={<CatEsportes/>}/>
                <Route path="/categoria/musicos" element={<CatMusicos/>}/>
                <Route path="/categoria/politico" element={<CatPolitico/>}/>
                <Route path="/categoria/literarico" element={<CatLiteratura/>}/>
                <Route path="/categoria/comunicador" element={<CatComunicador/>}/>
                <Route path="/categoria/politico" element={<CatPolitico/>}/>
                <Route path="/categoria/literarico" element={<CatLiteratura/>}/>
                <Route path="/categoria/comunicador" element={<CatComunicador/>}/>

                <Route path="/public/ativistas/paulo-freire" element={<PubPaulo/>}/>
                <Route path="/public/ativistas/luiz-gama" element={<PubLuiz/>}/>
                <Route path="/public/ativistas/marighella" element={<PubMarighella/>}/>
                <Route path="/public/ativistas/zunbi" element={<PubZumbi/>}/>
                <Route path="/public/ativistas/rita-lobo" element={<PubRitaB/>}/>
                
                <Route path="/public/comunicador/gloria" element={<PubGloria/>}/>
                <Route path="/public/comunicador/faustao" element={<PubMaju/>}/>
                <Route path="/public/comunicador/mauricio" element={<PubMauricio/>}/>
                <Route path="/public/comunicador/silvio" element={<PubSilvio/>}/>
                
                <Route path="/public/esporte/senna" element={<PubSenna/>}/>
'               <Route path="/public/esporte/guga" element={<PubGuga/>}/>
                <Route path="/public/esporte/pele" element={<PubPele/>}/>
                <Route path="/public/esporte/marta" element={<PubSocrates/>}/>
                <Route path="/public/esporte/maria-esther" element={<PubMaria/>}/>

                <Route path="/public/literatura/carolina" element={<PubCarolina/>}/>
                <Route path="/public/literatura/clarise" element={<PubCiarise/>}/>
                <Route path="/public/literatura/oscar-niemeyer" element={<PubLima/>}/>
                <Route path="/public/literatura/montero" element={<PubMontero/>}/>

                <Route path="/public/musico/ferrez" element={<PubCascao/>}/>
                <Route path="/public/musico/elsa" element={<PubElza/>}/>
                <Route path="/public/musico/mano-brown" element={<PubMano/>}/>
                <Route path="/public/musico/gabriel-o-pensador" element={<PubVila/>}/>

                <Route path="/publici/politico/getulio" element={<PubGetulio/>}/>
                <Route path="/publici/politico/juscelino" element={<PubJuscelino/>}/>
                <Route path="/publici/politico/lula" element={<PubLula/>}/>
                <Route path="/publici/politico/marechal" element={<PubMarechal/>}/>
                <Route path="/publici/politico/dilma" element={<PubDilma/>}/>

                <Route path="/public/religiao/irma-duce" element={<PubIrmã/>}/>
                <Route path="/public/religiao/chico" element={<PubChico/>}/>
                <Route path="/public/religiao/mae" element={<PubMae/>}/>
                <Route path="/public/religiao/helder" element={<PubDon/>}/>
            </Routes>
        </BrowserRouter>
    )
}
