//this is the entrypoint

//deps
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



//server listener
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
