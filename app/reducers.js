const feedFinderApp = (state = {}, action) => {
  var newState = state;
  switch (action.type) {
    case 'GOT_FEEDS':
      newState = Object.assign({}, state, {data: action.data});
    default:
      return newState;
  }
}