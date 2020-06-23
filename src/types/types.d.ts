export type User = {
  id: string;
  name: string;
  hasCoupon: boolean;
  couponCode: string | null;
  purchases: Array<Purchase>
}

export type Product = {
  id: string;
  name: string;
  price: number;
  details: string;
}

export type Purchase = {
  id: string;
  productId: string;
  userId: string;
  datePurchased: Date;
  couponApplied: boolean;
  couponCode: string | null;
}

export type Coupon = {
  code: string | null;
}

export type MockData = {
  products: Product[];
  users: User[];
  purchases: Purchase[];
  couponCode: string;
  couponInterval: number;
}

// declare module 'mock-data' {
//   class MockData {
//     constructor(
//       products: Product[], 
//       users: User[], 
//       purchases: Purchase[], 
//       couponCode: string, 
//       couponInterval: number
//     ) {
//       this.products = products;
//       this.users = users;
//       this.purchases = purchases;
//       this.couponCode = couponCode;
//       this.couponInterval = couponInterval
//     }
//     products: Product[];
//     users: User[];
//     purchases: Purchase[];
//     couponCode: string;
//     couponInterval: number;
//   }
// }
