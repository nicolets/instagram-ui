import * as yup from 'yup';

export const ProfileHeaderSchema = yup.object().shape({
    image: yup.mixed().required('You must select an image')
});