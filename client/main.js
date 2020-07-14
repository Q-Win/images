
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';



import './main.html';


const App = () => {
  return (
    <div>
      <ImageList/>
    </div>
  );
};

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
    .then(response => console.log(response));
});
