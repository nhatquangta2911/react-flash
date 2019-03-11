import React, { Component } from 'react'

export default class SimpleBoxes extends Component {
   render() {
    
    const {boxes, note}  = this.props.data;
    const boxList = boxes.map(box => {
        return (
            <div className="simpleBox" key={box.id}>
                <p className="rank">{box.rank}</p>
                <p className="song">{box.song}</p>
                <p className="artist">{box.artist}</p>
                <p className="note">{note}</p>
            </div>
        )
    });

    return (
        <div className="simpleBoxes">
            {boxList[1]}
        </div>    
    )
   
  }
}
