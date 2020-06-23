"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PurchasesService = {
    // Generally these methods will interact with a DB of some kind.
    // The implementation is basic here since we do not need a
    // persistent data layer or any sort of authentication
    // Get all purchases
    getPurchases: (dataSrc) => __awaiter(void 0, void 0, void 0, function* () {
        return dataSrc.purchases;
    }),
    // Make a purchase
    makePurchase: (dataSrc, purchase) => __awaiter(void 0, void 0, void 0, function* () {
        // Check if user applied a coupon or not
        let newPurchase = purchase;
        if (newPurchase.couponApplied) {
            const validCoupon = PurchasesService.validateCoupon(dataSrc, purchase.couponCode);
            if (!validCoupon) {
                newPurchase.couponApplied = false;
                newPurchase.couponCode = null;
            }
        }
        // This would be more robust. We're just pushing it to an array for demo purposes
        dataSrc.purchases.push(newPurchase);
        // Check if user should be granted a coupon
        const grantCoupon = PurchasesService.checkGrantCoupon(dataSrc);
        console.log(grantCoupon);
        if (grantCoupon) {
            // Apply coupon to user
            const user = dataSrc.users.find(user => user.id === purchase.userId);
            user.hasCoupon = true;
            user.couponCode = dataSrc.couponCode;
            console.log(user);
        }
        const response = {
            status: 'Success',
            value: newPurchase
        };
        return response;
    }),
    // Check if coupon should be granted
    /* It is unclear if we want the counter to restart to 0
    when the interval is changed, or maintain the comparison
    to total orders */
    checkGrantCoupon: (dataSrc) => {
        const purchaseCount = dataSrc.purchases.length;
        const interval = dataSrc.couponInterval;
        return (purchaseCount % interval === 0 && purchaseCount >= interval);
    },
    // This would be more robust, but we'll do a simple equality check for demo purposes
    validateCoupon: (dataSrc, coupon) => {
        return (coupon === dataSrc.couponCode);
    }
};
exports.default = PurchasesService;
//# sourceMappingURL=purchases-service.js.map