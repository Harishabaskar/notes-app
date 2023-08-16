import "./Notespage.css";
import {useState} from "react";

function Notespage() {

	const [selectedNote , setSelectedNote] = useState(0)


	const data = [
		{
			id: 0,
			title: "Animal",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officiis vitae error doloremque. Necessitatibus provident doloremque veritatis nostrum magni ipsa a incidunt enim dolorem. Similique deserunt quo minima dolorem iure?",
		},
		{
			id: 1,
			title: "Birds",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officiis vitae error doloremque. Necessitatibus provident doloremque veritatis nostrum magni ipsa a incidunt enim dolorem. Similique deserunt quo minima dolorem iure?",
		},
		{
			id: 2,
			title: "Insects",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officiis vitae error doloremque. Necessitatibus provident doloremque veritatis nostrum magni ipsa a incidunt enim dolorem. Similique deserunt quo minima dolorem iure?",
		},
		{
			id: 3,
			title: "Humans",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officiis vitae error doloremque. Necessitatibus provident doloremque veritatis nostrum magni ipsa a incidunt enim dolorem. Similique deserunt quo minima dolorem iure?",
		},
		{
			id: 4,
			title: "Humans",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officiis vitae error doloremque. Necessitatibus provident doloremque veritatis nostrum magni ipsa a incidunt enim dolorem. Similique deserunt quo minima dolorem iure?",
		},
		{
			id: 5,
			title: "Humans",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officiis vitae error doloremque. Necessitatibus provident doloremque veritatis nostrum magni ipsa a incidunt enim dolorem. Similique deserunt quo minima dolorem iure?",
		},
	];
	//>>>>>>>>>>>>>>    toggle form switch    <<<<<<<<<<<<<<<<<<<//
	const toggleForm = () => {
		const form = document.querySelector(".overlay");
		form.classList.toggle("hidden");
	};
	/*>>>>>>>>>>>>>>>>>>>   selected note  >>>>>>>>>>>>>>>>>>>   */

	const showEdit = (index) => {
		setSelectedNote(index) 
		toggleEdit()
	}
	const toggleEdit = () => {
		const editForm = document.querySelector(".editOverlay");
		editForm.classList.toggle("hidden");
	}
	const saveEdit = () => {
		console.log("successfully saved")
	}
	const deleteNote = () => {
		console.log("successfully deleted")
	}
	const AddNote = () => {
		console.log("successfully added")
	}



	return (
		<div className="notespage">
			{/*>>>>>>>>>>>>>>>>>>>   to display notes   >>>>>>>>>>>>>>>>>>>   */}
			<div className="note_body">
				<div className="note_cards">
					{data.map((item,index) => {
						return (
							<div className="note_card" key={item.id}>
								<div className="note_card_title">
									<span>
										<b>{item.title}</b>
									</span>
								</div>
								<hr />
								<div className="note_card_body">
									{item.content}
								</div>
								<div className="note_card_button ">
									<button onClick={() => {showEdit(index)}}>Edit</button>
									<button onClick={deleteNote}>Delete</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/*>>>>>>>>>>>>>>>>>>>   add button   >>>>>>>>>>>>>>>>>>>   */}

			<div className="addbutton">
				<button onClick={toggleForm}>Add</button>
			</div>
			{/*>>>>>>>>>>>>>>>>>>>   to edit notes   >>>>>>>>>>>>>>>>>>>   */}

			<div className="editOverlay hidden">
				<div className="form">
					<label htmlFor="">Edit Note</label>
					<input
						type="text"
						name="edittitle"
						id="edittitle"
						placeholder="Title"
						defaultValue={data[selectedNote].title}
					/>

					<textarea
						name="editcontent"
						id="editcontent"
						cols="30"
						rows="10"
						placeholder="Type a note"
						defaultValue={data[selectedNote].content}
					></textarea>
					<div className="form_btn">
						<button onClick={saveEdit}>Save</button>
						<button onClick={toggleEdit}>Cancel</button>
					</div>
				</div>
			</div>
			{/*>>>>>>>>>>>>>>>>>>>   to add notes   >>>>>>>>>>>>>>>>>>>   */}

			<div className="overlay hidden">
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
						<button onClick={AddNote}>Add</button>
						<button onClick={toggleForm}>Cancel</button>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Notespage;
