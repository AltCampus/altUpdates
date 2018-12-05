const initState = {
  usersData: [], 
  userId : 0
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_UPDATE': {
      console.log(action);

      let userObj = {}
      
      return {
        usersData: [...state.usersData, action.data]
      }
    }
  
    default:
      return state;
  }
}