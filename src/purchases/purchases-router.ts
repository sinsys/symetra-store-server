// Router - Purchases
import { Router, json } from 'express';
const jsonBodyParser = json();
const purchasesRouter = Router();
import mockData from '../mock-data/mock-data';
import { Purchase } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

// Services
import PurchasesService from './purchases-service';

purchasesRouter
  // Get all purchases
  .route('/')
  .get( (req, res, next) => {
    PurchasesService.getPurchases(mockData)
      .then(response => res.json(response))
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {
    const {
      productId,
      userId,
      couponApplied,
      couponCode
    } = req.body;

    const newPurchase: Purchase = {
      id: uuidv4(),
      productId: productId,
      userId: userId,
      datePurchased: new Date(),
      couponApplied: couponApplied,
      couponCode: couponCode
    };

    for (const [key, value] of Object.entries(newPurchase))
    if (value == null)
      return res.status(400).json({
        error: `Missing '${key}' in request body`
      });

    PurchasesService.makePurchase(mockData, newPurchase)
      .then(response => res.json(response))
      .catch(next);
  });

export default purchasesRouter;