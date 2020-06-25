import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import Transaction from '../models/Transaction';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

const createTransactionService = new CreateTransactionService(transactionsRepository);

transactionRouter.get('/', (request, response) => {
  try {
    return response.json(transactionsRepository.getAll());

  } catch (err) {
    return response.status(400).json({ error: err.message });

  }

});

transactionRouter.post('/', (request, response) => {

  try {
    const { title, value, income} = request.body();

    return createTransactionService.execute({title, value, income});

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
