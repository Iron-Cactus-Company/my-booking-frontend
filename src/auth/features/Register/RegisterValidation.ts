import * as yup from "yup";


export const ValidationRegisterSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email address'),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters long")
        .max(30, "Password must not exceed 30 characters")
        .required("Enter your password"),
    repeatPassword: yup.string()
        // @ts-ignore
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Confirm your password"),
    name: yup
        .string()
        .min(3, "Name must be at least 3 characters long")
        .max(20, "Name must not exceed 20 characters")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters"),
    phone: yup
        .string()
        .matches(/^\d+$/, "Invalid phone number")
        .required('Required'),
});
