import React, { Component } from 'react'

export default class Grid extends Component {
  render() {
    let rows = [];
    for (var i = 0; i < 5; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < 36; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td className='gridcells' key={cellID} id={cellID}></td>)
      }
      rows.push(<tr className='grid' key={i} id={rowID}>{cell}</tr>)
    }
    return (
      <div className="profile__list-container">
        <table id="simple-board">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
