import * as yup from "yup";

export const ValidationLoginSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email address'),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters long")
        .max(30, "Password must not exceed 30 characters")
        .required("Enter your password"),
});
