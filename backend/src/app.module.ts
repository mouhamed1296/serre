import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
<<<<<<< HEAD
import { PlantesModule } from './plantes/plantes.module';
=======
import { ClimatModule } from './climat/climat.module';
>>>>>>> dev

@Module({
  imports: [
    UserModule,
    ClimatModule,
    //Lien avec la base de donnée MongoDB
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    PlantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
