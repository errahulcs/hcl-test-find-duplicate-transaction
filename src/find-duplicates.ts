export interface Transaction {
  id: number,
  source: string,
  target: string,
  amount: number,
  description: string
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 * 
 * This is how a transaction looks like.
 * 
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 * 
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *  
 * 
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */

export function findDuplicateTransactions(transactions: Transaction[]) {

  var duplicateTransactions=[];
  for (let transaction of transactions) {
    let repeation=0;
    for (let innerTransaction of transactions) {
      if( innerTransaction.source == transaction.source &&
          innerTransaction.target == transaction.target &&
          innerTransaction.amount == transaction.amount &&
          innerTransaction.description == transaction.description){
            repeation++;
        }
        if(repeation>1){
          duplicateTransactions.push(transaction)
          break;
        }
    }

  }
  return duplicateTransactions;
}

export function findNeagtiveAmountTransactions(transactions: Transaction[]) {

  var negativeTransaction=[];
  for (let transaction of transactions) { 
    if(transaction.amount<0){
      negativeTransaction.push(transaction);
    }
  }
  return negativeTransaction;
}

export function findTransactionWithSameSourceNTarget(transactions: Transaction[]) {

  var negativeTransaction=[];
  for (let transaction of transactions) { 
    if(transaction.source==transaction.target){
      negativeTransaction.push(transaction);
    }
  }
  return negativeTransaction;
}

 