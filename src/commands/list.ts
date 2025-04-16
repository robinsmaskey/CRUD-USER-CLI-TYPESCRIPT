import { listUsers } from '../services/userService';
import { displayUserList } from '../utils/display';

export function handleList(): void {
  const users = listUsers();
  displayUserList(users);
}