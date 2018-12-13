import React, { Component } from 'react';
import {connect} from 'react-redux';

class Grid extends Component {

  state = {
    allUpdates: []
  }

  componentWillMount = () => {
    console.log(this.props.userId)
    fetch(`http://localhost:8000/api/user/${this.props.userId}/updates`)
    .then(res => res.json())
    .then(data => 
      this.setState({
        allUpdates: data.updates.allUpdates
      })
    ) 
  }

  render() {
    const { allUpdates } = this.state;
    console.log(allUpdates, "in grid")
    let nextDay = new Date('dec 11 2018');
    let rows = [];
    function nextDate(date){
      var nextD = new Date(date);
      nextD.setDate(date.getDate() + 1);
      nextDay = nextD;
      return nextD;}

    for (var i = 0; i < 5; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < 36; idx++){
        let cellID = `cell${i}-${idx}`
        let id = nextDate(nextDay);
        let className;

        allUpdates.map(obj => {
          let tempDate1 = obj.date.split('T')[0].split('-');
          let dFormate1 = '';
          for(let i = tempDate1.length - 1; i>= 0; i--) {
            dFormate1 += tempDate1[i];
          }
          let tempDate2 = id.toLocaleDateString().split('/');
          let dFormate2 = '';
          for(let i = 0; i< tempDate2.length; i++) {
            dFormate2 += tempDate2[i];
          }
          console.log(dFormate1, dFormate2)
          if(dFormate1 == dFormate2) {
            className = 'gridcells green';
          } else className = 'gridcells';
        })
        
        cell.push(<td className={className} key={cellID} id={id} ></td>)
      }
      rows.push(<tr className='grid' key={i} id={rowID}>{cell}</tr>)
    }
    return (
      <div className="profile__list-container">
        <table id="board">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.currentUserId,
    userInfo: state.currentUserData.userObj
  }
}

export default connect(mapStateToProps)(Grid);