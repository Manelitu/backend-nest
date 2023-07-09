import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const config = { cors: true };
  const app = await NestFactory.create(AppModule, config);
  await app.listen(3000);
}
bootstrap();
