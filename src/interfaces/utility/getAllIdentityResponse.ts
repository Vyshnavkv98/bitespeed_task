import { UserAttributes } from "../../domain/interface/IUser";

export function getAllIdentity(emailData: boolean | UserAttributes[], phoneData: boolean | UserAttributes[]): any {
    let primaryContactId: number | null = null;
    let emails: string[] = [];
    let phoneNumbers: string[] = [];
    let secondaryContactIds: number[] = [];
    let currentDate = new Date();

    function processData(data: UserAttributes[]) {
        JSON.parse(JSON.stringify(data)).forEach((element:any) => {
            const createdAt = new Date(element.createdAt);

            if (element.linkPrecedence === 'primary' && createdAt < currentDate) {
                currentDate = createdAt; 
                primaryContactId = element.id;

                if (!emails.includes(element.email)) emails.unshift(element.email);
                if (!phoneNumbers.includes(element.phoneNumber)) phoneNumbers.unshift(element.phoneNumber);
            } else {
                if (!emails.includes(element.email)) emails.push(element.email);
                if (!phoneNumbers.includes(element.phoneNumber)) phoneNumbers.push(element.phoneNumber);
                if (!secondaryContactIds.includes(element.id)) secondaryContactIds.push(element.id);
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