import { updateUser } from '../services/userService';
import { displayUserDetails } from '../utils/display';

export function handleUpdate(args: string[]): void {
  const idToUpdate = args[0];
  if (!idToUpdate) {
    throw new Error('User ID or username required');
  }
  const updateParts = args.slice(1).join(' ').split(/(?<=^[^\s]+)\s/);
  const updatedUser = updateUser(idToUpdate, updateParts[0] || undefined);
  console.log(`User "${updatedUser.username}" updated successfully!`);
  displayUserDetails(updatedUser);
}