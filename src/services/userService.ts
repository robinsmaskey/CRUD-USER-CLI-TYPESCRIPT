import { User } from '../models/User';
import { getUsers, saveUsers } from './database';

export function createUser(username: string): User {
  const users = getUsers();
  
  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }

  if (users.some(u => u.username === username)) {
    throw new Error('Username already exists');
  }

  const newUser: User = {
    id: Date.now().toString(),
    username,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);
  return newUser;
}

export function getUserByIdOrUsername(idOrUsername: string): User | undefined {
  const users = getUsers();
  return users.find(u => u.id === idOrUsername || u.username === idOrUsername);
}

export function updateUser(idOrUsername: string, newUsername?: string): User {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === idOrUsername || u.username === idOrUsername);

  if (userIndex === -1) {
    throw new Error('User not found');
  }

  if (newUsername && newUsername.length < 3) {
    throw new Error('New username must be at least 3 characters');
  }

  if (newUsername && users.some(u => u.username === newUsername && u.id !== users[userIndex].id)) {
    throw new Error('Username already taken');
  }

  const updatedUser = {
    ...users[userIndex],
    username: newUsername || users[userIndex].username,
    updatedAt: new Date().toISOString()
  };

  users[userIndex] = updatedUser;
  saveUsers(users);
  return updatedUser;
}

export function deleteUser(idOrUsername: string): void {
  const users = getUsers();
  const newUsers = users.filter(u => u.id !== idOrUsername && u.username !== idOrUsername);
  
  if (newUsers.length === users.length) {
    throw new Error('User not found');
  }

  saveUsers(newUsers);
}

export function listUsers(): User[] {
  return getUsers();
}