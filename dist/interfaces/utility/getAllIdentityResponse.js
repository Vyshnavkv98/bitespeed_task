"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllIdentity = void 0;
function getAllIdentity(emailData, phoneData) {
    let primaryContactId = null;
    let emails = [];
    let phoneNumbers = [];
    let secondaryContactIds = [];
    let currentDate = new Date();
    function processData(data) {
        JSON.parse(JSON.stringify(data)).forEach((element) => {
            const createdAt = new Date(element.createdAt);
            if (element.linkPrecedence === 'primary' && createdAt < currentDate) {
                currentDate = createdAt;
                primaryContactId = element.id;
                if (!emails.includes(element.email))
                    emails.unshift(element.email);
                if (!phoneNumbers.includes(element.phoneNumber))
                    phoneNumbers.unshift(element.phoneNumber);
            }
            else {
                if (!emails.includes(element.email))
                    emails.push(element.email);
                if (!phoneNumbers.includes(element.phoneNumber))
                    phoneNumbers.push(element.phoneNumber);
                if (!secondaryContactIds.includes(element.id))
                    secondaryContactIds.push(element.id);
            }
        });
    }
    if (Array.isArray(emailData)) {
        processData(emailData);
    }
    if (Array.isArray(phoneData)) {
        processData(phoneData);
    }
    return { contact: { primaryContactId, emails, phoneNumbers, secondaryContactIds } };
}
exports.getAllIdentity = getAllIdentity;
//# sourceMappingURL=getAllIdentityResponse.js.map