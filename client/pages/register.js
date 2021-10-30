import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/dist/client/link';
import AuthForm from '../components/forms/authForm';
import {useContext,useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../context';


const register = () => {
    
    const [loading,setLoading]=useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [secret, setSecret] = useState('');
    const [ok, setOk] = useState(false);
    const [state, setstate] = useContext(UserContext)
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`,
                {
                    name,
                    email,
                    password,
                    secret
                }
            );
            setName('');
            setEmail('');
            setPassword('');
            setSecret('');
            setOk(data.ok);
            setLoading(false);
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
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                   <AuthForm
                    handleSubmit={handleSubmit}
                    name ={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    secret={secret}
                    setSecret={setSecret}
                   
                   
                   />

                </div>
                 {loading ? <h1>Loading..</h1> : 
                   <div className="row">
                   <div className="col">
                       <Modal
                           title="congrat !"
                           visible={ok}
                           onCancel={() => setOk(false)}
                           footer={null}>
                           <p> you have succefuly registred</p>
                           <Link href="/login">
                               <a className="btn btn-primary btn-sm">Login</a>
                           </Link>

                       </Modal>
                   </div>

               </div>
               }
              <div className="row">
                  <div className="col">
                      <p className="text-center">Already registred ?{' '}
                      <Link href="/login">
                          <a>Login</a>
                      </Link></p>
                      
                  </div>
              </div>

            </div>

        </div>
    )
}
export default register;