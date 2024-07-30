import * as yup from "yup"

export const   initialValues = {
    username: "",
    password: "",
}

export const loginSchema =yup.object().shape({
    username:yup
    .string()
    .min(3,"please enter a username")
    .required(),
    password:yup
    .string()
    .min(5,"please inter your passsword")
    .required("Required"),
})