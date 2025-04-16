import { handleCreate } from './commands/create';
import { handleRead } from './commands/read';
import { handleUpdate } from './commands/update';
import { handleDelete } from './commands/delete';
import { handleList } from './commands/list';

export function handleCommand(): void {
  const args = process.argv.slice(2);
  const command = args[0];

  try {
    switch (command) {
      case 'create':
        handleCreate(args.slice(1));
        break;
      case 'read':
        handleRead(args.slice(1));
        break;
      case 'update':
        handleUpdate(args.slice(1));
        break;
      case 'delete':
        handleDelete(args.slice(1));
        break;
      case 'list':
        handleList();
        break;
      default:
        displayHelp();
        break;
    }
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Operation failed');
    process.exit(1);
  }
}

function displayHelp(): void {
  console.log('User Management CLI');
  console.log('Available commands:');
  console.log('  create <username> - Create a new user');
  console.log('  read <id|username> - View user details');
  console.log('  update <id|username> [newUsername] - Update user');
  console.log('  delete <id|username> - Delete user');
  console.log('  list - List all users');
}