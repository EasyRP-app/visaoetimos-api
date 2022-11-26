import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
} from 'typeorm';
import { Finance } from '../entities/finance.entity';
import { FinancesService } from '../finances.service';

@Injectable()
@EventSubscriber()
export class FinancesSubscriber implements EntitySubscriberInterface<Finance> {
  constructor(
    private financeService: FinancesService,
    @InjectConnection()
    private readonly connection: Connection,
  ) {
    connection.subscribers.push(this);
  }
  listenTo(): typeof Finance {
    return Finance;
  }
  //   async beforeInsert(event: InsertEvent<Finance>): Promise<void> {
  //     const accountPlanID = event.entity.accountPlanID;
  //     // event.entity.accountplan = event.entity.accountPlanID;
  //     console.log(accountPlanID);
  //   }
}
