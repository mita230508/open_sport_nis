import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Home</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>


          <h3>Da li ste ikad poželeli da <em>učestvujete u sportskim događajima u Nišu?</em></h3>
          <p>
            Ovo je onda pravo mesto za Vas!<br></br>
            <em>OpenSportsNiš</em> Vam nudi razne sportske događaje koji se održavaju u Nišu. Možete lako pronaći aktivnost koja Vas zanima, a jos lakše se prijaviti! Ukoliko želite sami da organizujete neki sportski događaj i to je moguće. <em>OpenSportsNiš</em> nudi svima mogućnost da organizuju sportski događaj i postave ga na platformu.
          </p>
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
