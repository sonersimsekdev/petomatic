import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

export default function Signin() {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" });
    const history = useNavigate();
    console.log("auth", localStorage.getItem("isAuthenticated"));

    const handleInputChange = (e) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //if username or password field is empty, return error message
        if (userData.username === "" || userData.password === "") {
            setErrorMessage((prevState) => ({
                value: "Empty username/password field",
            }));
        } else if (userData.username == "admin" && userData.password == "123456") {
            //Signin Success
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = "/";
        } else {
            //If credentials entered is invalid
            setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
        }
    };

    return (
        <body>
            <div className='container d-flex justify-content-center align-content-center ' style={{ marginTop: "10rem" }} >
                <main className="form-signin w-100 m-auto text-center">
                    <form >
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => handleInputChange(e)} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => handleInputChange(e)} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022 <a className="link-primary text-decoration-none" href='http://soners.dev/' >@soners.dev</a> </p>
                        {errorMessage.value && (
                            <p className="text-danger"> {errorMessage.value} </p>
                        )}
                    </form>
                </main>
            </div>
        </body>
    )
}
