import React from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import CustomTextField from '../commons/CustomTextField';
import { registerPatient } from '@/api/auth';

const PatientForm = () => {
    const validate = Yup.object({
        name: Yup.string().required("Name is Required"),
        username: Yup.string().required("Aadhar is Required"),
        password: Yup.string()
            .min(8, "Password must be minimum 8 characters!")
            .required("Password Required!"),
        password2: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match!")
            .required("Confirm password is reqired!"),
    });

    const registerUserMutation = useMutation({
        mutationFn: (data) => registerPatient(data),
        onSuccess: (message) => {
            console.log(message)
            localStorage.setItem("authToken", message?.data?.token)
            toast.success("Registered Successfully");
        },
        onError: (error) => {
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                Object.keys(errorData).forEach((key) => {
                    errorData[key].forEach((errorMessage) => {
                        toast.error(errorMessage);
                    });
                });
            } else {
                toast.error('An error occurred. Please try again.');
            }
        }
    })

    const handleUserSignUp = async (values) => {
        try {
            await registerUserMutation.mutateAsync(values);
        } catch (error) {
            console.error('Error during user registration:', error);
        }
    };

    return (
        <div className='w-1/3 py-10'>
            <Formik
                initialValues={{
                    name: '',
                    username: '',
                    password: '',
                    password2: '',
                }}
                validationSchema={validate}
                onSubmit={handleUserSignUp}
            >{(formik) => (
                <div>
                    <h1 className="text-3xl py-3">User Sign Up</h1>
                    <Form>
                        <CustomTextField
                            type="text"
                            label="Name"
                            name="name"
                            placeholder="Harsh"
                        />
                        <CustomTextField
                            type="text"
                            label="Aadhar Number"
                            name="username"
                            placeholder="000000000000"
                        />
                        <CustomTextField
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="qwert@123"
                        />
                        <CustomTextField
                            type="password"
                            name="password2"
                            label="Confirm Password"
                            placeholder="qwert@123"
                        />
                        <div className="flex justify-center">
                            <button className="text-center bg-[#FFC671] w-full px-4 py-2" type="submit">
                                {registerUserMutation.isPending ? <CircularProgress size="1.3rem" color="inherit" /> : "Sign Up"}
                            </button>
                        </div>
                    </Form>
                </div>
            )}
            </Formik>

        </div>
    )
}

export default PatientForm