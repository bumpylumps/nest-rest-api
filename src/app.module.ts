import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import config from './config/keys'; 

//Meeting place for routers, controllers, etc

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
