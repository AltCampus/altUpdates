import * as sampleData from './../data.json';
// export  const postUpdate = (data) => {
//   console.log(data, "post action fired");
//   return {
//     type: "POST_UPDATE",
//     data
//   }
// }

export function postUpdate(data) {
  return (dispatch) => {
    fetch("http://192.168.43.107:8000/add-post", {
     method: 'POST',
     headers: {
       "Content-Type": "application/json",
       "Accept" : "application/json"
     },
     body: JSON.stringify({
      tweetURL: data.tweetURL,
      codeChallenegeURL: data.codeChallenegeURL,
      reflection: data.reflection,
      date: new Date()
     }) 
   }).then(res => { 
     if(res.ok ) {
       res.json()
       .then((res) => {
         console.log(res);
         dispatch({ type: 'POST_UPDATE', data:res })
         })
       } else {
       res.json()
       .then((res) => {
         dispatch({ type: 'POST_UNSUCCESS', errData: res})
       })
     }
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

