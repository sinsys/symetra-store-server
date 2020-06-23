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
      datePurchased: new Date(),
      productId: productId,
      userId: userId,
      couponApplied: couponApplied,
      couponCode: couponApplied
        ? couponCode
        : null
    };

    PurchasesService.makePurchase(mockData, newPurchase)
      .then(response => res.json(response))
      .catch(e => console.log(e));
      // res.json(response))
      // .catch(next);
  });

purchasesRouter
  // Get coupon purchases
  .route('/coupon')
  .get( (req, res, next) => {
    PurchasesService.getCouponPurchases(mockData)
      .then(response => res.json(response))
      .catch(next);
  })
export default purchasesRouter;