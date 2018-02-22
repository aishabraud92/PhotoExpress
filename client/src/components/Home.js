import React, {Component} from 'react';

//basic component
class Home extends Component{
  render(){
    return(
      <div>
      <h1>WELCOME</h1>

      <a href="/trisha" class="btn btn-secondary btn-lg btn-block" role="button" aria-disabled="true">Trisha Album</a>
      <a href="/travel" class="btn btn-secondary btn-lg btn-block" role="button" aria-disabled="true">Travel Album</a>
      </div>

    );
  }
}
export default Home
