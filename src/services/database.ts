import * as fs from 'fs';
import * as path from 'path';
import { User } from '../models/User';

const DB_PATH = path.join(__dirname, '../../data/users.json');

export function initDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, '[]', 'utf-8');
  }
}

export function getUsers(): User[] {
  initDB();
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

export function saveUsers(users: User[]) {
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}