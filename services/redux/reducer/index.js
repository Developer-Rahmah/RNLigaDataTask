const DEFAULT_STATE = {
  isAuth: false,
};

const applicationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return state;
  }
};

export default applicationReducer;
