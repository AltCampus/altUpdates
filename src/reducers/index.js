const initState = {
  currentUserData: {},
  currentUserId : null
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_UPDATE': {
      console.log("action fired");
      const data = action.data;
      
      return {
        ...state,
        currentUserData : {
          ...state.currentUserData,
          dailyUpdates : [...state.currentUserData.dailyUpdates, ...data]
        } 
      }
    }
    case 'LOGIN_AUTH': {
      console.log(action.data)

      const myUser = {
        userObj : action.data,
        dailyUpdates : []
      };

      return {
        currentUserData : myUser,
        currentUserId : action.data.id
      }
      
    }

    default:
      return state;
  }
}