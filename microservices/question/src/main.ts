import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The question microservice subscribes to users channel, because it must get informed
// for changes in User entities.
const axios = require('axios');
async function subscribeToChannels(): Promise<boolean> {
  const resp = await axios.post("http://localhost:4000/subscribeAsync", {
    address: "http://localhost:3003/sync/getUserEvent",
    channels: ["users"]
  });
  return resp.status === 200;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);

  await subscribeToChannels()
}
bootstrap();
