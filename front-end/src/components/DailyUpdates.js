import React, { Component } from 'react';

class DailyUpdates extends Component {
  render() {
    return (
      <div className="update wrapper left-container">
        <div className="update__container">
          <h2 className="update__header center">Update Today's Performance</h2>
          <form className="update__form">
            <input className="text-field margin-tb padding-tb update__field" placeholder="Today's Tweet URL"/>
            <input className="text-field margin-tb padding-tb update__field" placeholder="Coding Challenge URL"/>
            <textarea className="text-field margin-tb padding-tb update__field" placeholder="Reflections" rows="5" />

            <button type="submit" className="btn update__btn margin-tb padding-tb">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default DailyUpdates;