import * as yup from "yup"

export const SignUpSchema = yup.object().shape({
    name: yup.string().required('Name field is required'),
    email: yup.string().email().required('Email field is required'),
    password: yup.string().min(8).max(32).required(),
    confirm_password: yup.string().required("Please re-type your password").oneOf([yup.ref("password")], "Passwords does not match"),
})
export const SignInSchema = yup.object().shape({
    email: yup.string().email().required('Email field is required'),
    password: yup.string().required(),
})