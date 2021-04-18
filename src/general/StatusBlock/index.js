import React from 'react';
import style from 'LigaDataTask/assets/styles';
import Container from 'LigaDataTask/src/general/Container/index';
import Loader from 'LigaDataTask/src/general/Loader';

const StatusBlock = ({loading, children, noIndicator}) => {
  // Sometimes, 'loading' prop can be an array of booleans, we handle them, and only render the children
  // when everything is done loading.
  const isLoadingArray =
    loading instanceof Array && loading.some(load => load == true);

  // If the 'loading' prop is a boolean, we handle it normally.
  const isLoadingBoolean = typeof loading == 'boolean' && loading;

  // If it is loading, render the 'Loader' indicator, else, we render the children
  if (isLoadingArray || isLoadingBoolean) {
    return noIndicator ? null : (
      <Container style={[style.General.fullScreen]}>
        <Loader />
      </Container>
    );
  } else {
    return typeof children == 'function' ? children() : children;
  }
};

export default StatusBlock;
