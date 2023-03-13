import * as Yup from 'yup';

const ContactFormDTO = Yup.object().shape({
    name: Yup.string()
    .required("Name is required")
    .min(4)
    .max(10),
    email: Yup.string()
    .required("Email is required")
    .email(),
    phone: Yup.string()
    .required("Phone is required")
    .phone(),
});

export {ContactFormDTO}