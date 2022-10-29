import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configEnvConfig from '@config/env/index.config';
import { TypeOrmConfigService } from '@config/typeorm/index.config';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [configEnvConfig], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmConfigService
    }),
  ],
  controllers: [],
  providers: []
})
export class AppModule {}