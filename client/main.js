
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import ReactDOM from 'react-dom';

import './main.html';


const App = () => {
  return (
    <div>
      React App 2
    </div>
  );
};

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
