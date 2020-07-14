
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
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
});
