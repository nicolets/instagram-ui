import * as yup from 'yup';
import { checkAvailabilityUser } from '../services/user.service'

export const registerSchema = yup.object().shape({
    username: yup.string()
        .test("username", 'This Username has already been registered', async function (username) {
            const isExist = await checkAvailabilityUser(username);
            console.log(isExist);
            return isExist;
        })
        .min(3)
        .required(),
    email: yup.string()
        .email()
        .required(),
    password: yup.string()
        .required()
        .min(6)
        .max(20)
});