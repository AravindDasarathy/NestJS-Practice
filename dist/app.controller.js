"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneBookController = void 0;
const common_1 = require("@nestjs/common");
const contact_dto_1 = require("./contact.dto");
const phoneBook = [
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
const findIndex = (contactId) => phoneBook.findIndex(entry => entry.id === parseInt(contactId));
let PhoneBookController = (() => {
    let PhoneBookController = class PhoneBookController {
        findAll() {
            return phoneBook;
        }
        findContact(contactId) {
            const contactIndex = findIndex(contactId);
            if (contactIndex === -1) {
                throw new common_1.NotFoundException;
            }
            return phoneBook.filter(entry => entry.id === parseInt(contactId))[0];
        }
        createContact(newContact) {
            const newCon = newContact;
            newCon.id = Math.floor(Number(Math.random().toFixed(2)) * Math.pow(10, 2));
            phoneBook.push(newCon);
            return newCon;
        }
        updateContact(contactId, updateData) {
            const updateIndex = findIndex(contactId);
            if (updateIndex === -1) {
                throw new common_1.NotFoundException;
            }
            Object.assign(phoneBook[updateIndex], updateData);
            return phoneBook;
        }
        deleteContact(contactId) {
            const deleteIndex = findIndex(contactId);
            if (deleteIndex === -1) {
                throw new common_1.NotFoundException;
            }
            phoneBook.splice(deleteIndex, 1);
            return {
                message: 'Contact deleted',
                data: phoneBook
            };
        }
    };
    __decorate([
        common_1.Get('contacts'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PhoneBookController.prototype, "findAll", null);
    __decorate([
        common_1.Get('contact/:contactId'),
        __param(0, common_1.Param('contactId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], PhoneBookController.prototype, "findContact", null);
    __decorate([
        common_1.Post('contact'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [contact_dto_1.createContactDto]),
        __metadata("design:returntype", void 0)
    ], PhoneBookController.prototype, "createContact", null);
    __decorate([
        common_1.Put('contact/:contactId'),
        __param(0, common_1.Param('contactId')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, contact_dto_1.createContactDto]),
        __metadata("design:returntype", void 0)
    ], PhoneBookController.prototype, "updateContact", null);
    __decorate([
        common_1.Delete('contact/:contactId'),
        __param(0, common_1.Param('contactId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PhoneBookController.prototype, "deleteContact", null);
    PhoneBookController = __decorate([
        common_1.Controller('api')
    ], PhoneBookController);
    return PhoneBookController;
})();
exports.PhoneBookController = PhoneBookController;
;
//# sourceMappingURL=app.controller.js.map