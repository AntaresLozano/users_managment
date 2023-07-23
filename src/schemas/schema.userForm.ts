import * as yup from "yup"


export const UsersSchema = yup.object().shape({
    name: yup.string().required("this field is required"),
    apellidos: yup.string().required("this field is required"),
    celular: yup.number().positive().integer().required("this field is required"),
    direccion: yup.string().required("this field is required"),
    email: yup.string().email("Please enter a valid email").required("this field is required"),
    role: yup.string().required("this field is required"),
})