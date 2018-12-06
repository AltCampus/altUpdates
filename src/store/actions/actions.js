import * as sampleData from './../../data.json';
export  const postUpdate = (data) => {
  console.log(data, "post action fired");
  return {
    type: "POST_UPDATE",
    data
  }
}

export const signUpAction = (data) => {
  console.log(data);
  return dispatch => {
    fetch('http://localhost:8000/signup', {
      method : "POST", 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    })
  }
}

export  const authAction = (data) => {
  console.log(data, "auth action fired");
  return (dispatch) => {
    if(data.username) {
      const currentUser = sampleData.default.filter(user => data.username === user.first_name);
      if(currentUser.length){
        return dispatch({
          type : "LOGIN_AUTH",
          data : currentUser[0]
        });
      }
    }
  }
}

