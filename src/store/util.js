// @flow
export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state')
    if (!serializedState) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: Object) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}
