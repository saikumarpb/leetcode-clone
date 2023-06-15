import { config } from 'dotenv';

let PORT: number;

/**
 * Loads config from .env file
 */
function loadConfig() {
  config();
  PORT = parseInt(process.env.PORT ?? '3000');
}

export { PORT, loadConfig };
