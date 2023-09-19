import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export function Login() {

    const navigate = useNavigate();
    const [formErr, setFormErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState('');

    function isValidEmail(e) {
        const {value} = e.target;
        const minSize = 6;

        if (value.length < minSize) {
            return setEmailErr(`Email too short. Minimum ${minSize} symbols.`);
        }
        return setEmailErr('');
    }

    function isValidPass(e) {
        const {value} = e.target;
        const minSize = 6;

        if (value.length < minSize) {
            return setPassErr(`Password too short. Minimum ${minSize} symbols.`);
        }
        return setPassErr('');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await axios.post('http://localhost:3001/api/login', {
            email,
            password: pass,
        });

        if (res.status === 'err') {
            setFormErr(res.data.msg);
        } else if (res.data.status === 'ok') {
            navigate('/dashboard');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit} className='col-12 col-sm-8 col-md-6 col-lg-4 m-auto py-5'>
                        <h1 className="h1 mb-3 fw-normal text-center">LOG IN</h1>

                        {
                            formErr && (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    {formErr}
                                    <button onClick={() => setFormErr('')} type="button" className="btn-close"
                                            data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )
                        }

                        <div className="form-floating mb-3">
                            <input onChange={e => setEmail(e.target.value)} onBlur={isValidEmail}
                                   type="email" id="email" value={email}
                                   className={`form-control ${emailErr ? 'is-invalid' : ''}`}/>
                            <label htmlFor="email">Email address</label>
                            <div className="invalid-feedback">{emailErr}</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={e => setPass(e.target.value)} onBlur={isValidPass}
                                   type="password" id="password" value={pass}
                                   className={`form-control ${passErr ? 'is-invalid' : ''}`}/>
                            <label htmlFor="password">Password</label>
                            <div className="invalid-feedback">{passErr}</div>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember Me
                            </label>
                        </div>
                        <button className="btn btn-warning w-100 py-2" type="submit">LOG IN</button>
                        <p className="my-3 text-center text-body-secondary">OR</p>
                        <Link to='/register' className="btn btn-outline-success w-100 py-2">REGISTER</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}