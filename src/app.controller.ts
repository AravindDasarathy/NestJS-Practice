import { Controller, Get, Param, Post, Body, Put, NotFoundException } from '@nestjs/common';
import { createContactDto } from './contact.dto';
// import { AppService } from './app.service';

const phoneBook: createContactDto[] = [
  {
    id: 1,
    name: 'Aravind',
    number: '1234'
  },
  {
    id: 2,
    name: 'Somebody',
    number: '3456'
  }
];

@Controller('api')
export class PhoneBookController {
  @Get('contacts')
  findAll() {
    return phoneBook;
  }

  @Get('contact/:contactId')
  findContact(@Param('contactId') contactId): object {
    return phoneBook.filter(entry => entry.id === parseInt(contactId))[0];
  }

  @Post('contact')
  createContact(@Body() newContact: createContactDto) {
    const newCon = newContact;
    newCon.id = Math.floor(Number(Math.random().toFixed(2)) * Math.pow(10, 2));
    phoneBook.push(newCon);

    return newCon;
  }

  @Put('contact/:contactId')
  updateContact(@Param('contactId') contactId: string, @Body() updateData: createContactDto) {
    const updateIndex = phoneBook.findIndex(entry => entry.id === parseInt(contactId));

    if (updateIndex === -1) {
      throw new NotFoundException;
    }

    Object.assign(phoneBook[updateIndex], updateData);
    return phoneBook;
  }
};
