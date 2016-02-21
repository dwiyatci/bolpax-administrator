/**
 * Created by glenn on 18/02/16.
 */

import React from 'react';
import $ from 'jquery';
import { apiUrls } from '../../../config';
import { Modal } from '../../common/modal';

const Toolbar = React.createClass({
  handleRefundAuthorize() {
    this.refundModal_.hide();

    //$.ajax({
    //  url    : apiUrls.refundPayments.update,
    //  type   : 'POST',
    //  data   : {
    //    trxId : '',
    //    refund: '',
    //    token : 'afds7f8dsf9s7d9fdcs',  // momentarily hardcoded
    //  },
    //  success: (data) => {
    //    console.log(data);
    //    $.notify('Refund authorized', 'success');
    //  },
    //  error  : () => {
    //    $.notify('Refund authorization failed', 'error');
    //  },
    //});

    $.notify('Refund authorized', 'success');
    //$.notify('Refund authorization failed', 'error');
  },

  handleReplyIssue() {
    const { replyModal_, replyTextArea_ } = this;
    const message = replyTextArea_.value;

    replyModal_.hide();

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
    //    $.notify('Message successfully sent', 'success');
    //  },
    //  error: () => {
    //    $.notify('Sending failed', 'error');
    //  }
    //});

    $.notify('Message successfully sent', 'success');
    //$.notify('Sending failed', 'error');
  },

  render() {
    const { props, handleRefundAuthorize, handleReplyIssue } = this;
    const { selectedTransactionId } = props;
    const rowSelected = !_.isEmpty(selectedTransactionId);

    return (
      <div className="navbar table-toolbar">
        <div className="pull-right">
          <button
            className={`btn btn-primary ${rowSelected ? '' : 'disabled'}`}
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
            ref={c => this.refundModal_ = c}
          >
            {`Are you sure you want to refund transaction ${selectedTransactionId}?`}
          </Modal>

          <button
            className={`btn btn-primary m-l-1 ${rowSelected ? '' : 'disabled'}`}
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
            ref={c => this.replyModal_ = c}
          >
            <form>
              <div className="form-group">
                <label htmlFor="message-text" className="form-control-label">Message:</label>
                <textarea
                  className="form-control"
                  id="message-text"
                  rows="3"
                  ref={c => this.replyTextArea_ = c}
                />
              </div>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
});

export { Toolbar as default, Toolbar };
