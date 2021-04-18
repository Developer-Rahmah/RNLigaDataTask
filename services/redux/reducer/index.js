const DEFAULT_STATE = {
  showGifImage: 'yes',
};

const applicationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_SHOW_GIF_ICON':
      return {
        ...state,
        showGifImage: action.payload,
      };

    default:
      return state;
  }
};

export default applicationReducer;
