// const loading = () => ({
//   type : "FETCH_LOADING",
// })

// const success = data => ({
//   type : "FETCH_SUCCESS",
//   payload : data
// })

// const error = id => ({
//   type : "FETCH_ERROR",
// })

export const testAction = (id,text,tag) => ({
  type : "EDIT__MESSAGE",
  id : id,
  payload: { content: {text,tag}}
})

