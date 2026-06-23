import 'dotenv/config';
import { createClient } from 'redis';

async function run() {
  const redisUrl = process.env.REDIS_URL?.trim();

  if (!redisUrl) {
    throw new Error('REDIS_URL is missing.');
  }

  const client = createClient({
    url: redisUrl,
  });

  client.on('error', (error) => {
    console.error('Redis client error:', error);
  });

  await client.connect();

  console.log('Connected to Redis.');
  await client.flushDb();
  console.log('✅ Redis FLUSHDB completed.');

  await client.quit();
}

run().catch((error) => {
  console.error('❌ Failed to flush Redis.', error);
  process.exit(1);
});