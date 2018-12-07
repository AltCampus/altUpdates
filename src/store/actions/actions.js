import * as sampleData from './../../data.json';
export  const postUpdate = (data) => {
  console.log(data, "post action fired");
  return {
    type: "POST_UPDATE",
    data
  }
}

export const signUpAction = (data) => {
  return (dispatch) => {
    fetch('http://192.168.1.116:8000/signup', {
      method : "POST", 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      if(data.responseStatus === '200') {
        dispatch({type: 'SIGNUP_SUCCESS', data})
      } else {
        dispatch({type: 'SIGNUP_ERR', data})
      }
    })
  }
}

export  const authAction = (data) => {
  return (dispatch) => {
    fetch('http://192.168.1.116:8000/login', {
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      if(data.msg) {
        dispatch({type: 'LOGIN_ERR', data})
      } else {
        dispatch({type: 'LOGIN_SUCCESS', data})
      }
    })
  }
}

