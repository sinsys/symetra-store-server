// Service - Admin related
import { MockData, PostResponse } from '../types/types';
const AdminService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Update coupon code
  updateCouponCode: async (dataSrc: MockData, couponCode: string) => {
    dataSrc.couponCode = couponCode;
    const response: PostResponse = {
      status: 'Success',
      value: couponCode
    };

    return response;
  },

  // Update coupon interval
  updateCouponInterval: async (dataSrc: MockData, couponInterval: number) => {
    dataSrc.couponInterval = couponInterval;
    const response: PostResponse = {
      status: 'Success',
      value: couponInterval
    };

    return response;
  }

}

export default AdminService;