import React, { useState } from "react";

function SignUpForm({ setUser = () => console.log('') }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bio, setBio] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                password,
                password_confirmation: passwordConfirmation,
                bio,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => setUser(user) && console.log(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="login-box">
            <div className="login-text-field">

                <label htmlFor="name" ></label>
                <input
                    className="login-text"
                    placeholder="Name"
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="login-text-field">

                <label htmlFor="username" ></label>
                <input
                    className="login-text"
                    placeholder="Username"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="login-text-field">
                <label htmlFor="password" ></label>
                <input
                    className="login-text"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
            </div>
            <div className="login-text-field">
                <label htmlFor="password" ></label>
                <input
                    className="login-text"
                    placeholder="Password Confirmation"
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
            </div>
            <div className="login-text-field">
                <label htmlFor="bio" ></label>
                <textarea
                    className="login-text"
                    placeholder="Bio"
                    rows="3"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </div>
            <div>
                <button type="submit" className="signout-button margin-center">{isLoading ? "Loading..." : "Sign Up"}</button>
            </div>
            <div>
            </div>
        </form>
    );
}

export default SignUpForm;