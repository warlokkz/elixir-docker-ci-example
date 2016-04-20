// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import React from "react"
import ReactDOM from "react-dom"
import mojs from "mo-js"
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

let Dashboard = React.createClass({
  render() {
    return(
      <div>
        <Mojs />
      </div>
    )
  }
});

let containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  height: '500px',
};

let buttonStyle = {
  backgroundColor: '#000',
  fontSize: '6rem',
  color: '#fff'
};

let Mojs = React.createClass({

  handleClick(event) {
    let el = event.currentTarget;
    // mo.js timeline obj
    let timeline = new mojs.Timeline();

    // tweens for the animation:

    // burst animation
    let tween1 = new mojs.Burst({
      parent: event.currentTarget,
      duration: 1500,
      shape : 'circle',
      fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
      x: event.pageX,
      y: event.pageY,
      opacity: 0.6,
      childOptions: { radius: {20:0} },
      radius: {40:120},
      count: 6,
      isSwirl: true,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });
    // ring animation
    let tween2 = new mojs.Transit({
      parent: event.currentTarget,
      duration: 750,
      type: 'circle',
      radius: {0: 50},
      fill: 'transparent',
      stroke: '#fff',
      strokeWidth: {15:0},
      opacity: 0.6,
      x: event.pageX,
      y: event.pageY,
      isRunLess: true,
      easing: mojs.easing.bezier(0, 1, 0.5, 1)
    });

    // add tweens to timeline:
    timeline.add(tween1, tween2);

    // when clicking the button start the timeline/animation:
    timeline.start();
  },

  render() {
    return(<div style={containerStyle} onClick={this.handleClick}></div>)
  }
});

ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));