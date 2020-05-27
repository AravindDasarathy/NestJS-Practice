import { Controller, Get, Param, Post, Body, Put, NotFoundException, Delete } from '@nestjs/common';
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

const findIndex = (contactId: string) => phoneBook.findIndex(entry => entry.id === parseInt(contactId));

@Controller('api')
export class PhoneBookController {
  @Get('contacts')
  findAll() {
    return phoneBook;
  }

  @Get('contact/:contactId')
  findContact(@Param('contactId') contactId): object {
    const contactIndex = findIndex(contactId);

    if (contactIndex === -1) {
      throw new NotFoundException;
    }

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
    const updateIndex = findIndex(contactId);

    if (updateIndex === -1) {
      throw new NotFoundException;
    }

    Object.assign(phoneBook[updateIndex], updateData);
    return phoneBook;
  }

  @Delete('contact/:contactId')
  deleteContact(@Param('contactId') contactId: string) {
    const deleteIndex = findIndex(contactId);

    if (deleteIndex === -1) {
      throw new NotFoundException;
    }

    phoneBook.splice(deleteIndex, 1);

    return {
      message: 'Contact deleted',
      data: phoneBook
    };
  }
};
