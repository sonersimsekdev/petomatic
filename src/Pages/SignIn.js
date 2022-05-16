import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "..//styles/_signin.scss"
export default function SignIn() {

    localStorage.setItem('email', JSON.stringify('admin@admin.com'));
    localStorage.setItem('pass', JSON.stringify('admin'));

    const [emails, setEmails] = useState()
    const [passs, setPasss] = useState()

    let navigate = useNavigate();

    function handleEmail (e){ setEmails(e.target.value) }
    function handlePass (e) { setPasss(e.target.value) }

    function singinForm(event) {
        event.preventDefault();
        if (localStorage.getItem('email') === emails && localStorage.getItem('pass') === passs) {
            console.log(emails+passs)
            debugger
            navigate("cat",{replace:true})
        }
    }

    return (
        <body>
            <div className='container d-flex justify-content-center align-content-center ' style={{ marginTop: "10rem" }} >
                <main className="form-signin w-100 m-auto text-center">
                    <form onSubmit={singinForm}>
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmail} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePass} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022 <a className="link-primary text-decoration-none" href='http://soners.dev/' >@soners.dev</a> </p>
                    </form>
                </main>
            </div>
        </body>
    )
}
