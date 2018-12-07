const initState = {
  currentUserData: {},
  currentUserId : null
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_UPDATE': {
      const data = action.data;
      console.log('fghjk')
      console.log(data)
      return {
        ...state,
        currentUserData : {
          ...state.currentUserData,
          dailyUpdates : data
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