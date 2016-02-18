/**
 * Created by glenn on 18/02/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { DATA_TYPE } from '../../../constants';
import { apiUrls } from '../../../config';
import { Modal } from '../../common/modal';

const Toolbar = React.createClass({
  handleRefundAuthorize() {
    $(ReactDOM.findDOMNode(this._refundModal)).modal('hide');

    //$.ajax({
    //  url    : apiUrls.refundPayments.update,
    //  type   : 'POST',
    //  data   : {
    //    trxId : '',
    //    refund: '',
    //  },
    //  success: (data) => {
    //    console.log(data);
    //  },
    //});
  },

  handleReplyIssue() {
    const message = $(ReactDOM.findDOMNode(this._replyModal))
      .modal('hide')
      .find('#message-text').val();

    console.log(message);

    //$.ajax({
    //  url    : apiUrls.replyIssues.update,
    //  type   : 'POST',
    //  data   : {
    //    fromAdmin    : '',
    //    message      : message,
    //    issueId      : '',
    //    issueStatusId: '',
    //  },
    //  success: (data) => {
    //    console.log(data);
    //  },
    //});
  },

  render() {
    const { props, handleRefundAuthorize, handleReplyIssue } = this;
    const { dataType, selectedTransactionId } = props;
    const toolbarVisible = (dataType === DATA_TYPE.ISSUE);
    const rowSelected    = !_.isEmpty(selectedTransactionId);

    return (
      <nav
        className="navbar table-toolbar"
        style={{display: toolbarVisible ? 'block' : 'none'}}
      >
        <div className="pull-right">
          <button
            className={'btn btn-primary ' + (rowSelected ? '' : 'disabled')}
            type="button"
            data-toggle="modal"
            data-target={rowSelected ? '#refund-modal' : ''}
          >
            Refund authorization
          </button>
          <Modal
            id="refund-modal"
            title="Refund authorization"
            commandName="Refund"
            onCommandOk={handleRefundAuthorize}
            ref={c => this._refundModal = c}
          >
            {`Are you sure you want to refund transaction ${selectedTransactionId}?`}
          </Modal>

          <button
            className={'btn btn-primary m-l-1 ' + (rowSelected ? '' : 'disabled')}
            type="button"
            data-toggle="modal"
            data-target={rowSelected ? '#reply-modal' : ''}
          >
            Reply issue
          </button>
          <Modal
            id="reply-modal"
            title="Reply issue"
            commandName="Send message"
            onCommandOk={handleReplyIssue}
            ref={c => this._replyModal = c}
          >
            <form>
              <div className="form-group">
                <label htmlFor="message-text" className="form-control-label">Message:</label>
                <textarea className="form-control" id="message-text" rows="3"></textarea>
              </div>
            </form>
          </Modal>
        </div>
      </nav>
    );
  }
});

export { Toolbar as default, Toolbar };
