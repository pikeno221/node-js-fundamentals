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
  transactions: Transaction[],
  balance: Balance
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public getAll(): TransactionListResponse {

    return ({transactions: this.transactions, balance: this.getBalance()})

  }


  public getBalance(): Balance {


    //const totalOutcome = this.transactions.reduce(this.sumValue);
    const totalOutcome = 20;

    const totalIncome = 30;

    const total = totalIncome - totalOutcome;

    return {income: totalIncome, outcome: totalOutcome, total};

  }

  public create({ title, value, type }: TransactionDTO): Transaction {

    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;

  }

  private sumValue(actual: Transaction, value: number): number {
    return actual.value + value;

  }
}

export default TransactionsRepository;
