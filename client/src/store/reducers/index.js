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
      console.log(action.data, "action LOGIN_AUTH data")

      const myUser = {
        userObj : action.data,
        dailyUpdates : []
      };
      return {
        currentUserData : myUser,
        currentUserId : action.data._id
      }  
    }
    case 'LOGIN_ERR': {
      return {
        currentUserData : action.data,
        currentUserId : 404
      }
    }
    case 'SIGNUP_SUCCESS': {
      console.log(action.data, "action SIGNUP_SUCCESS data");
      return {
        currentUserData : action.data.responseStatus
      }
    }
    case 'SIGNUP_ERR': {
      return {
        currentUserData : action.data.msg
      };
    }
    case 'LOGOUT_SUCCESS': {
      document.cookie = "username='' password=''"
      
      return {
        currentUserData: {},
        currentUserId : null
      }
    }
    default:
      return state;
  }
}