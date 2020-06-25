import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string,
  value: number,
  type: 'income' | 'outcome';
}

interface TransactionListResponse {
  transaction: Transaction[],
  balance: Balance
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): TransactionListResponse {

  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title, value, type }: TransactionDTO): Transaction {

    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;

  }
}

export default TransactionsRepository;
