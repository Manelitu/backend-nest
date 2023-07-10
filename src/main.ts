import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { configSwagger, configClassValidator, configCors } from './main/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configCors(app);
  configClassValidator(app);
  configSwagger({
    app,
    config: {
      url: '/docs',
    },
  });

  await app.listen(3000);
}

bootstrap();
