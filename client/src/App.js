import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Gallery from './Gallery';
import SelectedImage from './SelectedImage';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

const trisha = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: photos, selectAll: false };
    this.selectPhoto = this.selectPhoto.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }
  selectPhoto(event, obj) {
    let photos = this.state.photos;
    photos[obj.index].selected = !photos[obj.index].selected;
    this.setState({ photos: photos });
  }
  toggleSelect() {
    let photos = this.state.photos.map((photo, index) => { return { ...photo, selected: !this.state.selectAll } });
    this.setState({ photos: photos, selectAll: !this.state.selectAll });
  }
  render() {
    return (
      <div>
      <div class="container">
      <h2>My Photo Album</h2>
        <ul class="breadcrumb">
          <li><a href="/photos">Home</a></li>
            <li><a href="/trisha">Trisha</a></li>
              <li><a href="/test">Pictures</a></li>
                <li class="/vacation">Vacation</li>
              </ul>
            </div>
        <p><button className="toggle-select" onClick={this.toggleSelect}>toggle select all</button></p>
        <Gallery photos={this.state.photos} onClick={this.selectPhoto} ImageComponent={SelectedImage} />

            </div>

    )
  }
}
//render(<App />, document.getElementById('app'));

export default App;
