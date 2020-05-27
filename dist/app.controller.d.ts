import { createContactDto } from './contact.dto';
export declare class PhoneBookController {
    findAll(): createContactDto[];
    findContact(contactId: any): object;
    createContact(newContact: createContactDto): createContactDto;
    updateContact(contactId: string, updateData: createContactDto): createContactDto[];
    deleteContact(contactId: string): {
        message: string;
        data: createContactDto[];
    };
}
