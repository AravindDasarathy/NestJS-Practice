import { Module } from '@nestjs/common';
import { PhoneBookController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PhoneBookController],
  providers: [AppService],
})
export class AppModule {}
