const initState = {
  currentUserData: {},
  currentUserId : null
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_UPDATE': {
      console.log(action.data, "action POST_UPDATE data");
      const data = action.data; 
      return {
        ...state,
        currentUserData : {
          userObj: {...state.currentUserData.userObj},
          dailyUpdates: [...state.currentUserData.dailyUpdates, data[0].allUpdates]
        } 
      }
    }
    case 'LOGIN_SUCCESS': {
      console.log(action.data[0], "action LOGIN_AUTH data")

      const {username, password} = action.data[0];

      document.cookie = `username=${username} password=${password}`

      const myUser = {
        userObj : action.data[0],
        dailyUpdates : []
      };
      return {
        currentUserData : myUser,
        currentUserId : action.data[0]._id
      }  
    }
    case 'LOGIN_ERR': {
      console.log(action.data, "login err reducer")
      return state;
    }
    case 'SIGNUP_SUCCESS': {
      console.log(action.data, "action SIGNUP_SUCCESS data");
      return {
        currentUserData : action.data.responseStatus
      }
    }
    case 'SIGNUP_ERR': {
      console.log(action.data, "action SIGNUP_ERR data");
      return {
        currentUserData : action.data.msg
      };
    }
    default:
      return state;
  }
}