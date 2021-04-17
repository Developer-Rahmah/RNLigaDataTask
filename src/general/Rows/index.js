import React from 'react';
import {FlatList} from 'react-native';
import LoadingMore from 'LigaDataTask/src/layout/LoadingMore';
import styles from 'LigaDataTask/assets/styles';
import Col from 'LigaDataTask/src/general/Col';
import EmptyListMessage from 'LigaDataTask/src/general/EmptyListMessage';

/**
 *
 * @param {import('react-native').FlatListProps|{loading:boolean,bottomSpace:boolean,usePadding:boolean,paddingAmount:number,largeBottomSpace:boolean}} param0
 */
const Rows = ({
  loading,
  showsVerticalScrollIndicator = false,
  bottomSpace,
  largeBottomSpace,
  renderItem,
  usePadding = false,
  paddingAmount = 150,
  ...rest
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ListEmptyComponent={EmptyListMessage}
      contentContainerStyle={{paddingBottom: usePadding ? paddingAmount : 0}}
      ListFooterComponent={({}) => <LoadingMore loading={loading} />}
      renderItem={props => (
        <Col
          style={[
            bottomSpace && styles.General.paddingBottom,
            {flex: 1},
            largeBottomSpace && styles.General.largePaddingBottom,
          ]}>
          {renderItem(props)}
        </Col>
      )}
      {...rest}
    />
  );
};

export default Rows;
