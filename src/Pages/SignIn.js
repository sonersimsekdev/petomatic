import React from 'react'
import "..//styles/_signin.scss"
export default function SignIn() {
    return (    
        <body>
         <div className='container d-flex justify-content-center align-content-center' >
            <main className="form-signin w-100 m-auto text-center">
                <form>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>

                       
                        <button className="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022 <a className="link-primary text-decoration-none" href='http://soners.dev/'>@soners.dev</a> </p>
                </form>
            </main>
            </div>
            </body>
    )
}
