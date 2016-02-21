/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';
import { TABLE_TYPE, DATA_TYPE } from '../../constants';
import { Table as MainTable } from './table';
import { DetailContent } from './detail-content';

const MainContent = React.createClass({
  handleSelectedTransactionIdChanged(selectedTransactionId) {
    this.setState({
      selectedTransactionId,
    });
  },

  getInitialState() {
    return {
      selectedTransactionId: '',
    };
  },

  render() {
    const { props, state, handleSelectedTransactionIdChanged } = this;
    const { dataType } = props;
    const { selectedTransactionId } = state;
    let toolbarNode;
    let detailContentNode;

    if (dataType === DATA_TYPE.ISSUE) {
      toolbarNode =
        <MainTable.Toolbar
          selectedTransactionId={selectedTransactionId}
        />;
    }

    if (!_.isEmpty(selectedTransactionId)) {
      detailContentNode =
        <DetailContent
          dataType={dataType}
          selectedTransactionId={selectedTransactionId}
        />;
    }

    return (
      <div className="col-sm-10 col-sm-offset-2 main">
        {toolbarNode}
        <MainTable
          dataType={dataType}
          tableType={TABLE_TYPE.MAIN}
          selectedTransactionId={selectedTransactionId}
          onSelectedTransactionIdChanged={handleSelectedTransactionIdChanged}
          pollInterval={20000}
        />
        {detailContentNode}
      </div>
    );
  },
});

export { MainContent as default, MainContent };
