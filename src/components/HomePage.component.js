import React, { Component } from 'react';
import ViewComments from "./comments-list.component.js";
import CreateComments from "./create-exercise.component.js";


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Welcome to my blog!</p>
        <p>This is where I would tell recruiters about myself!</p> 
        
        
        <p>I'm currently working on a creating a prediction model using 
          data from the coronavirus outbreak to determine what the projected numbers are.</p>

        <p>Additionally, I've done some work on sales projections using similar types of data. </p>               
       <ViewComments/>
       <CreateComments/>

      </div>
    )
  }
}