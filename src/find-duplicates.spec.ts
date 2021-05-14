import { findDuplicateTransactions, findNeagtiveAmountTransactions, findTransactionWithSameSourceNTarget, Transaction } from './find-duplicates';

test('Find duplicate transactions', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'D',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ];
  expect(findDuplicateTransactions(transactions)).toEqual([
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    }
  ]);

});

test('Find negative transactions', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: -300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'D',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ];
  
  expect(findNeagtiveAmountTransactions(transactions)).toEqual([{
    id: 3,
    source: 'A',
    target: 'B',
    amount: -300,
    description: 'tikkie'
  }]);

});

test('Find transaction with same Source and Target address', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'B',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'A',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ];
  
  expect(findTransactionWithSameSourceNTarget(transactions)).toEqual([ 
    {
      id: 2,
      source: 'B',
      target: 'B',
      amount: 1000,
      description: 'rent'
    },{
    id: 4,
    source: 'A',
    target: 'A',
    amount: 100,
    description: 'groceries'
  }]);

});

