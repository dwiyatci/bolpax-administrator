/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';
import { DATA_TYPE, TABLE_TYPE } from '../../../constants';
import { apiUrls, tableDescriptors } from '../../../config';
import { Toolbar } from './toolbar';

const Table = React.createClass({
  loadDataFromServer() {
    const { dataType, tableType, pollInterval } = this.props;
    let resourceName = dataType;

    if (tableType === TABLE_TYPE.MAIN) {
      resourceName = `${resourceName}s`;
    } else {
      resourceName = `${resourceName}_${TABLE_TYPE.DETAIL}s`;
    }

    resourceName = resourceName.toLowerCase();

    // Mock data. To be removed for production.
    const data = require(`test-data/${_.kebabCase(resourceName)}`);
    this.setState({
      data,
    });

    //$.ajax({
    //  url     : apiUrls[resourceName].read,
    //  success : (data) => {
    //    console.log(data);
    //  },
    //});
  },

  getInitialState() {
    return {
      data: [],
    };
  },

  componentDidMount() {
    this.loadDataFromServer();
  },

  render() {
    const { props, state } = this;
    const { dataType, tableType,
            selectedTransactionId,
            onSelectedTransactionIdChanged, parent } = props;

    const path = `${dataType}.${tableType}`.toLowerCase();
    const { headerTexts, orderedColKeys } = _.get(tableDescriptors, path);

    return (
      <table className="table table-striped m-t-1">
        <thead>
        <tr>
          {_.map(headerTexts, (headerText, i) =>
            <Table.Header key={i} text={headerText} />)}
        </tr>
        </thead>
        <tbody>
        {_.map(state.data, (data, i) => {
          let { transactionId } = data;

          if (dataType === DATA_TYPE.TRANSACTION) {
            transactionId = data.id;
          }

          const isClickable = (tableType === TABLE_TYPE.MAIN);
          const isSelected  = isClickable && (transactionId === selectedTransactionId);
          const onClick     = isClickable ? onSelectedTransactionIdChanged : _.noop;

          return (
            <Table.Row
              key={i}
              colKeys={orderedColKeys}
              data={data}
              isClickable={isClickable}
              isSelected={isSelected}
              onClick={onClick.bind(parent, transactionId)}
            />
          );
        })}
        </tbody>
      </table>
    );
  },
});

Table.Header = ({ text }) => (
  <th>{text}</th>
);

Table.Row = ({ colKeys, data, isClickable, isSelected, onClick }) => {
  const className = [];

  if (isClickable) {
    className.push('clickable');
  }

  if (isSelected) {
    className.push('table-info');
  }

  return (
    <tr
      className={className.join(' ')}
      onClick={onClick}
    >
      {_.map(colKeys, (colKey) =>
        <td key={colKey}>{data[colKey].toString()}</td>)}
    </tr>
  );
};

Table.Toolbar = Toolbar;

export { Table as default, Table };
