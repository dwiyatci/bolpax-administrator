/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';
import { TABLE_TYPE } from '../../constants';
import { Table as DetailTable } from './table';

const DetailContent = ({ dataType, selectedTransactionId }) => (
  <div className="m-t-3 detail">
    <h5 className="detail-header">Transaction ID: {selectedTransactionId}</h5>
    <DetailTable
      dataType={dataType}
      tableType={TABLE_TYPE.DETAIL}
    />
  </div>
);

export { DetailContent as default, DetailContent };
