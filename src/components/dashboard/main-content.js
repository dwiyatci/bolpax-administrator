/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';
import { TABLE_TYPE } from '../../constants';
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
    const { dataType, pollInterval } = props;
    const { selectedTransactionId } = state;

    return (
      <div className="col-sm-10 col-sm-offset-2 main">
        <MainTable.Toolbar
          dataType={dataType}
          selectedTransactionId={selectedTransactionId}
        />
        <MainTable
          dataType={dataType}
          tableType={TABLE_TYPE.MAIN}
          selectedTransactionId={selectedTransactionId}
          onSelectedTransactionIdChanged={handleSelectedTransactionIdChanged}
          parent={this}
          pollInterval={pollInterval}
        />
        <DetailContent
          dataType={dataType}
          selectedTransactionId={selectedTransactionId}
          pollInterval={pollInterval}
        />
      </div>
    );
  },
});

export { MainContent as default, MainContent };
