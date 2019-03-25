const initialState = {
  test: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET__MESSAGE":
      return {
        test: ""
      }
    default:
      return state
  }
}