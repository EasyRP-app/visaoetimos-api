import { Module } from '@nestjs/common';
import { SuppliersAndCustomersService } from './suppliers-and-customers.service';

@Module({
  providers: [SuppliersAndCustomersService],
})
export class SuppliersAndCustomersModule {}
