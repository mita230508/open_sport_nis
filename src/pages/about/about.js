import React from 'react';
import './about.scss';

export default function About() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Home</h2>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>
            <h2><strong>Nakon toga o sajtu, nešto malo o nama</strong></h2>
            <h3>Dimitrije Atanasković</h3>
            <span>Ja sam Dimitrije Atanasković, učenik specijalizovanog matematičkog odeljenja 1. godine. Od malena volim da rešavam probleme, prvo u matematici a kasnije i u programiranju. Oduvek volim izazove i to je jedan od razloga zašto sam se sa svojim timom prijavio za Hakaton. Ljudi često govore da sam odgovoran i preduzumljiv, pa je izbor mog tima bio da ja budem kapiten i da nas vodim u uzbudljive izazove hakatona.</span>
            <p>Mejl : dimitrije.a.atanskovic@gmail.com</p>
            <h3>Aleksa Stevčić</h3>
            <span>Moje ime je Aleksa Stevčić i pohađam 1. razred Gimnazije „Svetozar Marković“. Otkad sam bio mali su me zanimali tehnologija i programiranje. Već nekoliko godina se takmičim iz programiranja a pravio sam i razne manje projekte. Hakaton mi je izgledao zanimljivo jer je to timsko takmičenje projektnog tipa za razliku od ostalih. Na pripremama i tokom izrade projekta sam stekao razna nova saznanja koja će mi značiti kasnije u radu.</span>
            <p>Mejl : stevcicaleksa08@gmail.com</p>    
            <h3>Danilo Stošić</h3>
                <span>Ja sam Danilo Stošić, ljubitelj programiranja i rešavanja problema. Trenutno pohađam 1. razred specijalizovanog matematičkog odeljenja. Oduvek me je zanimalo kako računari funkcionišu i kako mogu da kreiram svoje aplikacije i programe. Jedna od stvari koja me najviše privlači u programiranju je mogućnost da sarađujem sa drugim ljudima i da zajedno stvaramo nešto novo i korisno. Zbog toga sam se prijavio za Hakaton, gde ću imati priliku da pokažem svoje sposobnosti i da naučim nešto novo od drugih programera. Hakaton je za mene izazov, ali i zabava, jer volim da se takmičim i da se zabavljam uz programiranje.</span>
            <p>Mejl : danubis357@gmail.com</p>
            <h3>Lazar Filipović</h3>
            <span>Ja sam Lazar Filipović, učenik specijalizovanog matematičkog odeljenja 1. godine. Od malena sam pokazivao ljubav prema naukama i logikom. Do skoro sam se bavio matematikom i fizikom samo ali sam odlučio da isprobam programiranje zato što sam uvek okružen tehnologijom. Volim rad u timu i zato sam se prijavio za Hakaton, u nadi lepog provoda i dodaavanja diverziteta u odnosu na ostale koji se već duže bave programiranjem.</span>
            <p>Mejl : lazar.filipovic202@gmail.com</p>
          </div>
        </div>
        <address className='content-block'> 
        <p> Pri potrebi kontakta možete koristiti naredno (napisano po redu brzine odgovora):
          <ul>
            <li>opensportsnis@gmail.com</li>
            <li>dimitrije.a.atanaskovic@gmail.com</li>
          </ul>
        </p>
        </address>
      </React.Fragment>
  )}
  
