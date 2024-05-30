"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIdentity = void 0;
const userRepositoryImpl_1 = require("../../../infrastructure/dataAccess/userRepositoryImpl");
const getAllIdentityResponse_1 = require("../../../interfaces/utility/getAllIdentityResponse");
let userRepositoryImpl = new userRepositoryImpl_1.UserRepositoryImpl();
const verifyIdentity = async (email, phoneNumber) => {
    const emailExist = await userRepositoryImpl.isExistEmail(email);
    const phoneExist = await userRepositoryImpl.isExistPhoneNumber(phoneNumber);
    if (Array.isArray(emailExist) == false && email !== null && phoneNumber !== null && Array.isArray(phoneExist) == false) {
        const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'primary');
        if (response) {
            let emailData = await userRepositoryImpl.isExistEmail(email);
            let res = (0, getAllIdentityResponse_1.getAllIdentity)(emailData, false);
            return res;
        }
        else {
            throw new Error('failed to create new identity');
        }
    }
    else if (Array.isArray(emailExist) == true && Array.isArray(phoneExist) == false) {
        if (phoneNumber !== null) {
            const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'secondary');
            if (response) {
                const emailData = await userRepositoryImpl.isExistEmail(email);
                const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber);
                const res = (0, getAllIdentityResponse_1.getAllIdentity)(emailData, phoneData);
                return res;
            }
            else {
                throw new Error('failed to create new identity');
            }
        }
        else {
            const emailData = await userRepositoryImpl.isExistEmail(email);
            const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber);
            const res = (0, getAllIdentityResponse_1.getAllIdentity)(emailData, phoneData);
            return res;
        }
    }
    else if (Array.isArray(emailExist) == false && Array.isArray(phoneExist) == true) {
        console.log(Array.isArray(emailExist) == false && Array.isArray(phoneExist) == true, 'seccccccccccccccccccccccccc');
        if (email !== null) {
            const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'secondary');
            if (response) {
                const emailData = await userRepositoryImpl.isExistEmail(email);
                const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber);
                const res = (0, getAllIdentityResponse_1.getAllIdentity)(emailData, phoneData);
                return res;
            }
            else {
                throw new Error('failed to create new identity');
            }
        }
        else {
            const emailData = await userRepositoryImpl.isExistEmail(email);
            const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber);
            const res = (0, getAllIdentityResponse_1.getAllIdentity)(emailData, phoneData);
            return res;
        }
    }
    else if (Array.isArray(emailExist) == true && Array.isArray(phoneExist) == true) {
        let id = null;
        let oldestDate = new Date();
        // console.log(emailExist,'emailexist');
        console.log(JSON.stringify(emailExist));
        JSON.parse(JSON.stringify(emailExist)).forEach((identity) => {
            if (identity.createdAt && new Date(identity.createdAt) < new Date(oldestDate)) {
                oldestDate = identity.createdAt;
                id = identity.id;
                console.log(id);
            }
        });
        JSON.parse(JSON.stringify(phoneExist)).forEach((identity) => {
            if (identity.createdAt && new Date(identity.createdAt) < new Date(oldestDate)) {
                oldestDate = identity.createdAt;
                id = identity.id;
            }
        });
        const response = await userRepositoryImpl.updateUser(id);
        console.log(response);
        if (response) {
            const emailData = await userRepositoryImpl.isExistEmail(email);
            const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber);
            const res = (0, getAllIdentityResponse_1.getAllIdentity)(emailData, phoneData);
            return res;
        }
        else {
            throw new Error('failed to create new identity');
        }
    }
    else {
        throw new Error('please fill the fields');
    }
};
exports.verifyIdentity = verifyIdentity;
//# sourceMappingURL=verifyIdentity.js.map