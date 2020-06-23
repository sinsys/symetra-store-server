
import { MockData, Product } from '../types/types';
const AdminService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Update coupon code
  updateCouponCode: async (dataSrc: MockData, couponCode: string) => {
    dataSrc.couponCode = couponCode;
    return {
      status: 'Success',
      value: couponCode
    }
  },

  // Update coupon interval
  updateCouponInterval: async (dataSrc: MockData, couponInterval: number) => {
    dataSrc.couponInterval = couponInterval;
    return {
      status: 'Success',
      value: couponInterval
    }
  }

}

export default AdminService;