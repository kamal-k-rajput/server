import { Injectable } from '@nestjs/common';
import { Doctor, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async doctors(): Promise<Doctor | null> {
    return this.prisma.doctor.findMany({});
  }
}
