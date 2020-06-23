// Service - User related
import { MockData, User } from '../types/types';
const UsersService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Get all users
  getUsers: async (dataSrc: MockData) => {
    return dataSrc.users as User[];
  }

}

export default UsersService;