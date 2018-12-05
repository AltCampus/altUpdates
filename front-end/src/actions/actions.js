export  const postUpdate = (data) => {
  console.log(data, "post action fired");
  return {
    type: "POST_UPDATE",
    data
  }
}

export  const authAction = (data) => {
  console.log(data, "auth action fired");
  return {
    type: "LOGIN_AUTH",
    data
  }
}

