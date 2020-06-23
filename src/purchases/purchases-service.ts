
import { MockData, Purchase} from '../types/types';
const PurchasesService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Get all products
  getPurchases: async (dataSrc: MockData) => {
    return dataSrc.purchases as Purchase[];
  }

}

export default PurchasesService;