import { createUser } from '../services/userService';
import { displayUserDetails } from '../utils/display';

export function handleCreate(args: string[]): void {
  const username = args.join(' ');
  if (!username) {
    throw new Error('Username is required');
  }
  const newUser = createUser(username);
  console.log(`User "${newUser.username}" created successfully!`);
  displayUserDetails(newUser);
  console.log('Test for PR');
}