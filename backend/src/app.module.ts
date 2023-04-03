import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PlantesModule } from './plantes/plantes.module';
import { ClimatModule } from './climat/climat.module';
import { SerialService } from './serial/serial.service';


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
    AuthModule,
    PlantesModule,
  ],
  controllers: [AppController],
  providers: [AppService, SerialService],
})
export class AppModule {}
