
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';



import './main.html';


class App extends Component {
  componentWillMount(){
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        <ImageList/>
      </div>
    );
  }
};

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
