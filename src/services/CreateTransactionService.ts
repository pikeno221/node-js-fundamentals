import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;

  }

  public execute({ title, value, type }: Request): Transaction {

    if (!['income', 'outcome'].includes(type)) {
        throw new Error('Transaction type ins not valid');

    }

    const totalBalance = this.transactionsRepository.getBalance().total;

    if (type == 'outcome' && value > totalBalance) throw Error('The value that you are trying to get is biggest than your balance. ');

    return this.transactionsRepository.create({ title, value, type });

  }

}

export default CreateTransactionService;
