import React, {Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
//basic component
class Travel extends Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">MEMORIES</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to='/'>  HOME  </Link>
            <Link to='/upload'> UPLOAD  </Link>
            <Link to='/trisha'> TRISHA </Link>

            </div>
          </div>
        </nav>
        <h3>Travel</h3>
          <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbb9f596c0ef8&attid=0.2&disp=safe&realattid=1593073099284152320-local1&zw' />
            <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbb9f596c0ef8&attid=0.3&disp=safe&realattid=1593073099284152320-local2&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbb9f596c0ef8&attid=0.4&disp=safe&realattid=1593073099284152320-local3&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbb9f596c0ef8&attid=0.6&disp=safe&realattid=1593073099284152320-local5&zw' />

              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbb9f596c0ef8&attid=0.5&disp=safe&realattid=1593073099284152320-local4&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbbab986d0d02&attid=0.3&disp=safe&realattid=1593073186574958592-local2&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbbab986d0d02&attid=0.1&disp=safe&realattid=1593073186574958592-local0&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbad0dab4131a&attid=0.4&disp=safe&realattid=1593072218666958848-local3&zw' />

              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbad0dab4131a&attid=0.7&disp=safe&realattid=1593072218666958848-local6&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbad0dab4131a&attid=0.3&disp=safe&realattid=1593072218666958848-local2&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbad0dab4131a&attid=0.5&disp=safe&realattid=1593072218666958848-local4&zw' />
              <img src='https://mail.google.com/mail/u/1/?ui=2&ik=8bc24f3703&view=att&th=161bbad0dab4131a&attid=0.2&disp=safe&realattid=1593072218666958848-local1&zw' />
            </div>

    );
  }
}



export default Travel
