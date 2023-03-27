import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    //Lien avec la base de donnée MongoDB
    MongooseModule.forRoot(
      'mongodb+srv://msarr:namass20@eventcluster.0xsvy.mongodb.net/serre?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
