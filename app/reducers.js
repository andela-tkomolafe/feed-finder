export const feedFinderApp = (state = {}, action) => {
  switch (action.type) {
    case 'GOT_FEEDS':
      return Object.assign({}, state, {data: action.data});
    default:
      return state;
  }
}