const rankMiddleware = () => next => action => {
  const { debounce } = action.meta || {};

  if (!debounce) return next(action);

  if (pending[action.type]) {
    clearTimeout(pending[action.type]);
  }

  pending[action.type] = setTimeout(() => {
    delete pending[action.type];
    next(action);
  }, debounce);
};

export default rankMiddleware;
