export const feedFinderApp = (state = {}, action) => {
  switch (action.type) {
    case 'GOT_FEEDS':
      return Object.assign({}, state, {data: action.data})
    case 'GOT_FEEDS_FAIL':
      return Object.assign({}, state, {error: action.data})
    default:
      return state;
  }
}