import "./Signup.css";
import { useState } from "react";

function Signup() {

    const [userName, setUsername] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const addUser = async () => {
        const data = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("/api/v1/users", {
            method: "GET",
            headers: myHeaders,
            redirect: 'follow'
        })

        const result = await response.json()
        
        //filtering the data

        const filterData = result.filter((item) => {
            return item.email === email
        })


        // post request based on the filter data
        if (filterData.length > 0) {
            alert("email already exist")
        } else {
            const response = await fetch("/api/v1/users", requestOptions);
            const result = await response.text();
            console.log(result)
            alert("you are successfully signed in")
            window.location.href = "/login";
        }
    }


    return (
        <div className="signup">
            <div className="card">
                <h2>Signup</h2>
                <form>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                    <input type="text" name="firstname" placeholder="Firstname" onChange={(e) => { setFirstname(e.target.value) }} />
                    <input type="text" name="lastname" placeholder="Lastname" onChange={(e) => { setLastname(e.target.value) }} />
                    <input type="email" name="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

                </form>
                <div className="button-div">
                    <button onClick={addUser}>Signup</button>

                </div>

                <p>If you already have an account? <a href="/login">Login</a> </p>
            </div>
        </div>
    );

}

export default Signup;