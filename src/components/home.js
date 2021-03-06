import React from 'react';
import '../style/home.css';

class Home extends React.Component {


  render() {
    return (
      <React.Fragment>
        <div className="title">
          <h1>Accueil</h1>
          <span className="LineTitle"></span>
        </div>

        {/* <h2 className='second-title'>Présentation de l'application</h2> */}

        <div className="presentation">

          <div className='profil'></div>

          <div className='contentPresentation'>
            <div className='contenairStart'>
              <div className='start'></div>
            </div>
            <div className='contenairText'>
              Cette application a pour objectif d'être un widget qui centralise différentes fonctions disponibles sur un laptop.<br /><br />
              Vous pouvez réaliser à la fois votre veille sur les dernières actualités technologique du moment, suivre le cours des cryptos ou bien prendre des notes sur ce que
              vous estimez d'important.<br /><br />
              Lancez l'application en fond, en écoutant de la musique tout en travaillant.<br /><br />
              Par la suite, l'application sera mise à jour pour pouvoir être personnalisable à 100%.
              Vous pourrez choisir quel genre de widget, vous voulez avoir, avec des fonctionnalités supplémentaires !<br /><br />
              SEE YOU SOON !!<br />


            </div>
            <div className='contenairEnd'>
              <div className='end'></div>

            </div>

            <div className='droits'>
            © 2022 Tous droits réservés
            </div>
          </div>

        </div>

      </React.Fragment>
    );
  }
}


export default Home;