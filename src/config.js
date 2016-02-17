/**
 * Created by glenn on 17/02/16.
 */

//const baseApiUrl = 'http://bolpax.mybluemix.net';
//let apiUrls      = {
//  login             : {
//    read: '/profile/dologin',
//  },
//  transactions      : {
//    read: '/trx/list',
//  },
//  transactionDetails: {
//    read: '/trx/detailcomplete',
//  },
//  issues            : {
//    read: '/issues/list',
//  },
//  issueDetails      : {
//    read: '/issue/detailcomplete',
//  },
//  refundPayments    : {
//    update: '/trx/transfer',
//  },
//  replyIssues       : {
//    update: '/issue/insertTrail',
//  },
//};

const baseApiUrl = './test-data';
let apiUrls      = {
  login             : {
    read: '/profile/dologin',
  },
  transactions      : {
    read: '/transactions.json',
  },
  transactionDetails: {
    read: '/transaction-details.json',
  },
  issues            : {
    read: '/issues.json',
  },
  issueDetails      : {
    read: '/issue-details.json',
  },
  refundPayments    : {
    update: '/trx/transfer',
  },
  replyIssues       : {
    update: '/issue/insertTrail',
  },
};

apiUrls = _.mapValues(apiUrls, resource =>
  _.mapValues(resource, apiUrl => baseApiUrl + apiUrl)
);

const tableDescriptors = {
  transaction: {
    main  : {
      headerTexts   : [
        'Transaction Audit Trail',
        'Transaction ID',
        'Buyer Name',
        'Merchant Name',
        'Product',
        'Total Amount',
        'Buyer Transaction Status',
        'Merchant Transaction Status',
        'Refund Status',
      ],
      orderedColKeys: [
        'auditTrail',
        'id',
        'buyerName',
        'merchantName',
        'product',
        'totalAmount',
        'buyerTransactionStatus',
        'merchantTransactionStatus',
        'refundStatus',
      ],
    },
    detail: {
      headerTexts   : [
        'Transaction Date',
        'Buyer Transaction History',
        'Buyer Transaction Status',
        'Merchant Transaction History',
        'Merchant Transaction Status',
      ],
      orderedColKeys: [
        'transactionDate',
        'buyerTransactionHistory',
        'buyerTransactionStatus',
        'merchantTransactionHistory',
        'merchantTransactionStatus',
      ],
    }
  },
  issue      : {
    main  : {
      headerTexts   : [
        'Issue Audit Trail',
        'Transaction ID',
        'Buyer Name',
        'Merchant Name',
        'Reporter Role',
        'User Issue Status',
        'User Issue Title',
        'User Issue History',
      ],
      orderedColKeys: [
        'auditTrail',
        'transactionId',
        'buyerName',
        'merchantName',
        'reporterRole',
        'userIssueStatus',
        'userIssueTitle',
        'userIssueHistory',
      ],
    },
    detail: {
      headerTexts   : [
        'Issue Date',
        'User Issue Status',
        'User Issue History',
      ],
      orderedColKeys: [
        'issueDate',
        'issueStatus',
        'issueHistory',
      ],
    }
  },
};

export { apiUrls, tableDescriptors };
