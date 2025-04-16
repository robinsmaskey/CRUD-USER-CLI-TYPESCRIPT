import { User } from '../models/User';

export function displayUserDetails(user: User): void {
  console.log('\nUser Details:');
  console.log('----------------------------');
  console.log(`ID: ${user.id}`);
  console.log(`Username: ${user.username}`);
  console.log(`Created: ${user.createdAt.split('T')[0]}`);
  console.log(`Updated: ${user.updatedAt?.split('T')[0] || 'Never'}`);
  console.log('----------------------------\n');
}

export function displayUserList(users: User[]): void {
  if (users.length === 0) {
    console.log('No users found.');
    return;
  }

  console.log('\nUser List:');
  console.log('ID\t\tUsername');
  console.log('----------------------------------------');
  users.forEach(user => {
    console.log(`${user.id}\t${user.username}`);
  });
  console.log('----------------------------------------');
  console.log(`Total users: ${users.length}\n`);
}