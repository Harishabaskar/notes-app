import "./Notespage.css";
// import {useState} from "react";

function Notespage() {
	
	
	
	const toggleForm = () => {
		const form = document.querySelector(".overlay")
		form.classList.toggle("hidden")
	}

	return (
		<div className="notespage">
			<div className="addbutton">
				<button onClick = {toggleForm}>Add</button>
			</div>
			<div className = "overlay hidden"  >
				<div className="form" >
					<label htmlFor="">Add Note</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Title"
					/>

					<textarea
						name="content"
						id="content"
						cols="30"
						rows="10"
						placeholder="Type a note"
					></textarea>
					<div className="form_btn">
						<button>Add</button>
						<button onClick = {toggleForm}>Cancel</button>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Notespage;
