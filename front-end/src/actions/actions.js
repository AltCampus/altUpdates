export function postUpdate(data) {
  console.log(data, "data in action")
  return {
    type: "POST_UPDATE",
    data
  }
}