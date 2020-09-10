import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity
    const newOpcaity = opacity - 0.1
    return (
      <div className="color-box" style={{opacity: opacity}}>
        {opacity >= 0.2 ? (<ColorBox opacity={newOpcaity}/>) : null}
      </div>
    )
  }

}

