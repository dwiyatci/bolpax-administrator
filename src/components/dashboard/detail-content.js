/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';
import { TABLE_TYPE } from '../../constants';
import { Table as DetailTable } from './table';

function DetailContent({ dataType, selectedTransactionId, pollInterval }) {
  const detailVisible = !_.isEmpty(selectedTransactionId);

  return (
    <div
      className="m-t-3 detail"
      style={{display: detailVisible ? 'block' : 'none'}}
    >
      <h5 className="detail-header">Transaction ID: {selectedTransactionId}</h5>
      <DetailTable
        dataType={dataType}
        tableType={TABLE_TYPE.DETAIL}
        pollInterval={pollInterval}
      />
    </div>
  );
}

export { DetailContent as default, DetailContent };
