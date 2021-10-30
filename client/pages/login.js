import {useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/dist/client/link';
import AuthForm from '../components/forms/authForm';
import { useRouter } from 'next/router';
import { UserContext } from '../context';


const Login = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setstate] = useContext(UserContext)
    

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`,
                {

                    email,
                    password,

                }
            );
            //saving in context
            setstate({
                user:data.user,
                token: data.token
            })

            //saving in local storage
            window.localStorage.setItem('auth',JSON.stringify(data))
            router.push("/");
        }

        catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }

    }
    if(state && state.token) router.push("/")
    return (

        <div className="container-fluid">
            <div className="row py-5 img-default  -light"  >
                <div className="col-4 text-center">
                    <h1>login page</h1>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <AuthForm
                        handleSubmit={handleSubmit}

                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        page="login"



                    />

                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-center">Not yet registred ?{' '}
                            <Link href="/register">
                                <a>Register</a>
                            </Link></p>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Login;