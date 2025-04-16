import { deleteUser } from '../services/userService';

export function handleDelete(args: string[]): void {
  const idToDelete = args[0];
  if (!idToDelete) {
    throw new Error('User ID or username required');
  }
  deleteUser(idToDelete);
  console.log('User deleted successfully!');
}