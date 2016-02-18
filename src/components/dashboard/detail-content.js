/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';
import { TABLE_TYPE } from '../../constants';
import { Table as DetailTable } from './table';

function DetailContent({ dataType, selectedTransactionId }) {
  const detailVisible = !_.isEmpty(selectedTransactionId);
  let detailNode      = <div />;

  if (detailVisible) {
    detailNode = (
      <div className="m-t-3 detail">
        <h5 className="detail-header">Transaction ID: {selectedTransactionId}</h5>
        <DetailTable
          dataType={dataType}
          tableType={TABLE_TYPE.DETAIL}
        />
      </div>
    );
  }

  return (
    detailNode
  );
}

export { DetailContent as default, DetailContent };
