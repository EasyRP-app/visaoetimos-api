import { Injectable } from '@nestjs/common';
// import { CreateSuppliersAndCustomerInput } from './dto/create-suppliers-and-customer.input';
// import { UpdateSuppliersAndCustomerInput } from './dto/update-suppliers-and-customer.input';

@Injectable()
export class SuppliersAndCustomersService {
  // create(createSuppliersAndCustomerInput: CreateSuppliersAndCustomerInput) {
  //   return 'This action adds a new suppliersAndCustomer';
  // }

  findAll() {
    return `This action returns all suppliersAndCustomers`;
  }

  findOne(id: string) {
    return `This action returns a #${id} suppliersAndCustomer`;
  }

  // update(
  //   id: string,
  //   updateSuppliersAndCustomerInput: UpdateSuppliersAndCustomerInput,
  // ) {
  //   return `This action updates a #${id} suppliersAndCustomer`;
  // }

  remove(id: string) {
    return `This action removes a #${id} suppliersAndCustomer`;
  }
}
