import { Form, Button, Input } from 'antd'
import { useFormik } from 'formik';
// import { loginSchema } from '../schemas/inex';
// import { initialValues } from '../utils/formUtils';
import { useEffect, useState } from 'react';
import { useLogin } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../stateMangment/AuthState';
import { initialValues, loginSchema } from '../pages/teacher/FormUtil';

function LoginPage() {
    const navigate = useNavigate()
    const {AuthState,setAuthState} = useAuthState()
    const[login,setLogin]=useState([])
    const onSubmit = () => {

    };
    const { mutate: logIn ,data,isSuccess, isError} = useLogin();


useEffect(() => {
    if (isSuccess) {
        console.log(data.token);
        
        localStorage.setItem('token', data.token);
        console.log(localStorage);
        setAuthState(
            {
                token:data.token
            }
        )

        navigate('/App'); 
    }
    if (isError) {
      
        console.error(isError);
    }
}, [isSuccess, isError, data, navigate, isError]);
    console.log(data?.token);
     
    localStorage.setItem('myData', data?.token);

    
    const onLogIn=()=>{
        logIn({
            username:values.username,
            password:values.password
            
        })
      
    }

    

 


      
    const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema: loginSchema,
        onSubmit,
    })
    return (
        <div className='Log-in'>
            <h1 className='log'>Login... </h1>
            <Form.Item
            
                name="usename" label="username"
               validateStatus={touched.username && errors.username ? 'error' : ''}
                help={touched.username && errors.username ? errors.username : ''}
                >
                    <Input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        
                    />
            </Form.Item>
            <Form.Item
                name="password" label="password"
                    validateStatus={touched.password && errors.password ? 'error' : ''}
                    help={touched.password && errors.password ? errors.password : ''}
                >
                    <Input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='password'
                    />
            </Form.Item>
            <Button className='configBtn' onClick={onLogIn}>Login</Button>

        </div>
    )
}


export default LoginPage



