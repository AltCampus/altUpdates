const url = "http://localhost:8000/api";

export function postUpdate(data) {
  console.log("fired")
  return (dispatch) => {
    fetch(`${url}/update`, {
     method: 'POST',
     headers: {
       "Content-Type": "application/json",
       "Accept" : "application/json"
     },
     body: JSON.stringify({
      tweetURL: data.tweetURL,
      codeChallenegeURL: data.codeChallenegeURL,
      reflection: data.reflection,
      date: new Date(),
      userId: data.userId
     }) 
   }).then(res => { 
     if(res.ok ) {
       res.json()
       .then((res) => {
         console.log(res, "it's working")
         return dispatch({ type: 'POST_UPDATE', data:res })
        })
       } else {
       res.json()
       .then((res) => {
         return dispatch({ type: 'POST_UNSUCCESS', errData: res})
       })
     }
    })
  }
}


export const signUpAction = (data) => {
  return (dispatch) => {
    fetch(`${url}/signup`, {
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
    fetch(`${url}/login`, {
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.msg) {
        dispatch({type: 'LOGIN_ERR', data})
      } else {
        dispatch({type: 'LOGIN_SUCCESS', data: data })
      }
    })
  }
}

export const logOut = () => {
	return {
    type: 'LOGOUT_SUCCESS'
  }
}
