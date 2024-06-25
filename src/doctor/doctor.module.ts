import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService],
  imports: [DatabaseModule],
})
export class DoctorModule {}
