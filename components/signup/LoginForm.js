import React from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import CustomTextField from '../commons/CustomTextField';
import { loginUser } from '@/api/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginForm = ({ type }) => {
  const router = useRouter();
  const validate = Yup.object({
    username: Yup.string().required("Aadhar/MRN is Required"),
    password: Yup.string()
      .min(8, "Password must be minimum 8 characters!")
      .required("Password Required!"),
  });

  const loginUserMutation = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (message) => {
      console.log(message)
      localStorage.setItem("authToken", message?.data?.token)
      toast.success("Logged In Successfully");
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

  const handleUserLogin = async (values) => {
    try {
      await loginUserMutation.mutateAsync(values);
      if(type === 'patient'){
        router.push('/dashboard/history');
      }
      else {
        router.push('/diagnosed-patients');
      }
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };

  return (
    <div className='w-1/3 py-10'>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={handleUserLogin}
      >{(formik) => (
        <div>
          <h1 className="text-3xl py-3">{type === "patient" ? "Patient" : "Doctor"} Login</h1>
          <Form>
            <CustomTextField
              type="text"
              label={type === "patient" ? "Aadhar" : "Medical Registry Number"}
              name="username"
              placeholder="000000000000"
            />
            <CustomTextField
              type="password"
              name="password"
              label="Password"
              placeholder="qwert@123"
            />
            <div className="flex flex-col items-center justify-center gap-3">
              <button className="text-center bg-[#FFC671] w-full px-4 py-2 rounded-sm my-1" type="submit">
                {loginUserMutation.isPending ? <CircularProgress size="1.3rem" color="inherit" /> : "Login"}
              </button>
              <div className='text-sm'>New User? <Link href={type === "patient" ? "/patient/signup" : "/doctor/signup"} className='text-cyan-700'>Sign Up</Link> Instead</div>
            </div>
          </Form>
        </div>
      )}
      </Formik>

    </div>
  )
}

export default LoginForm