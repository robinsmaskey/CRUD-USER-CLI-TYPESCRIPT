import { getUserByIdOrUsername } from '../services/userService';
import { displayUserDetails } from '../utils/display';

export function handleRead(args: string[]): void {
  const identifier = args[0];
  if (!identifier) {
    throw new Error('User ID or username required');
  }
  const user = getUserByIdOrUsername(identifier);
  if (!user) {
    throw new Error('User not found');
  }
  displayUserDetails(user);
}