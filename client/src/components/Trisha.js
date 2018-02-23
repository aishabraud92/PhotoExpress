import React, {Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';


class Trisha extends Component{
  render(){
    return(
      <div className='Home'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">MEMORIES</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to='/'>  HOME  </Link>
            <Link to='/travel'> TRAVEL </Link>
            </div>
          </div>
        </nav>
        <h3>Trisha</h3>
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.1&disp=safe&realattid=1593072378019053568-local0&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.2&disp=safe&realattid=1593072378019053568-local1&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.3&disp=safe&realattid=1593072378019053568-local2&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.4&disp=safe&realattid=1593072378019053568-local3&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.5&disp=safe&realattid=1593072378019053568-local4&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.6&disp=safe&realattid=1593072378019053568-local5&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.7&disp=safe&realattid=1593072378019053568-local6&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.8&disp=safe&realattid=1593072378019053568-local7&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.12&disp=safe&realattid=1593072378019053568-local11&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.11&disp=safe&realattid=1593072378019053568-local10&zw' />
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbaf28c853278&attid=0.10&disp=safe&realattid=1593072378019053568-local9&zw' />

        </div>

    );
  }
}


export default Trisha
