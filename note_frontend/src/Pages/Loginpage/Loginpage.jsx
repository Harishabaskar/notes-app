import "./Loginpage.css";
import { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const chkUser = async () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const response = await fetch("/api/v1/users", {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		});

		const result = await response.json();

		//filtering the data

		const filterData = result.filter((item) => {
			if(item.email === email && item.password === password){
                return item;
                
            }
            else{
                return null;
            }
		});
        console.log(filterData)
        if(filterData.length > 0){
            sessionStorage.setItem("user" , JSON.stringify(filterData))
            sessionStorage.setItem("loggedIn" , "true")
            alert("You're successfully logged in")
            window.location.href = "/"
        }   
        else{
            alert("user credentials invalid")
        }     
	};

	return (
		<div className="login">
			<div className="card">
				<h2>Login</h2>
				<form>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</form>
				<div className="button-div">
					<button onClick={chkUser}>Login</button>
				</div>

				<p>
					If you dont have an account? <a href="/signup">Sign up</a>{" "}
				</p>
			</div>
		</div>
	);
}

export default Login;
