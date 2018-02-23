import React, {Component} from 'react';

//basic component
class Home extends Component{
  render(){
    return(
      <div>
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-2">MEMORIES</h1>
    <p class="lead">A REACT Photo app</p>
  </div>
</div>
      <a href="/trisha" class="btn btn-secondary btn-lg btn-block" role="button" aria-disabled="true">Trisha</a>
      <a href="/travel" class="btn btn-secondary btn-lg btn-block" role="button" aria-disabled="true">Travel</a>
      </div>

    );
  }
}
export default Home
