import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'database/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RQ_RS_FACTORY_SERVICE } from './interfaces';
import { RqRsFactoryService } from './services/rq-rs-factory.service';

/* ----------------------------------------- */

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, PrismaService, 
    {
      useClass: RqRsFactoryService, // You can switch useClass to different implementation
      provide: RQ_RS_FACTORY_SERVICE,
    },

  ] ,
})

/* ----------------------------------------- */

export class AppModule {}
