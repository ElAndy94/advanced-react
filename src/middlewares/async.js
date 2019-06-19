export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its 'payload'
  // if it does, then wait for it to resolve
  // if it doesn't then send the action to the next middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the promise to resolve
  // Create a new action with that data and dispatch it
  action.payload.then(res => {
    const newAction = { ...action, payload: res };
    dispatch(newAction);
  });
};
