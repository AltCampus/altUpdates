const initState = {
  usersData: []
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_UPDATE':
      return {
        usersData: [...state.usersData, action.data]
      }
  
    default:
      return state;
  }
}