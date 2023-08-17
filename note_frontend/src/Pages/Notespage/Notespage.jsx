import "./Notespage.css";
import { useEffect, useState } from "react";

function Notespage() {
	const [data, setData] = useState([]);

	const [refresher, SetRefresher] = useState(false);

	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
			method: "GET",
			headers: myHeaders,

			redirect: "follow",
		};

		fetch("/api/v1/notes", requestOptions)
			.then((response) => response.text())
			.then((result) => setData(JSON.parse(result)))
			.catch((error) => console.log("error", error));
	}, [refresher]);

	const [addNote, setAddnote] = useState({
		title: "",
		content: "",
	});

	const [changedNote, setChangedNote] = useState({
		id: "",
		title: "",
		content: "",
	});

	//>>>>>>>>>>>>>>    toggle form switch    <<<<<<<<<<<<<<<<<<<//
	const toggleForm = () => {
		setAddnote({
			title: "",
			content: "",
		});

		const form = document.querySelector(".overlay");
		form.classList.toggle("hidden");
	};
	/*>>>>>>>>>>>>>>>>>>>   selected note  >>>>>>>>>>>>>>>>>>>   */

	const showEdit = (index) => {
		setChangedNote((prev) => ({
			...prev,
			id: data[index]._id,
			title: data[index].title,
			content: data[index].content,
		}));

		toggleEdit();
	};
	const toggleEdit = () => {
		const editForm = document.querySelector(".editOverlay");
		editForm.classList.toggle("hidden");
	};
	const saveEdit = () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			title: changedNote.title,
			content: changedNote.content,
			
		});

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch("/api/v1/notes/"+changedNote.id, requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));

			SetRefresher(!refresher);

		toggleEdit()

		console.log("successfully saved");
		console.log("note is changed", changedNote);
	};
	const deleteNote = (id) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
			method: "DELETE",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch("/api/v1/notes/" + id, requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));

		SetRefresher(!refresher);

		console.log("successfully deleted");
	};
	const AddNote = () => {
		const userData = sessionStorage.getItem("user");

		const jsonData = JSON.parse(userData);

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			title: addNote.title,
			content: addNote.content,
			userId: jsonData[0]._id,
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch("/api/v1/notes", requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));

		console.log("note is added", addNote);

		console.log(jsonData[0]._id);

		console.log("successfully added");

		SetRefresher(!refresher);

		toggleForm();
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setChangedNote((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const handleChangeAdd = (e) => {
		const { name, value } = e.target;
		setAddnote((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="notespage">
			{/*>>>>>>>>>>>>>>>>>>>   to display notes   >>>>>>>>>>>>>>>>>>>   */}
			<div className="note_body">
				<div className="note_cards">
					{data.map((item, index) => {
						return (
							<div className="note_card" key={item._id}>
								<div className="note_card_title">
									<span>
										<b>{item.title}</b>
									</span>
								</div>
								<hr />
								<div className="note_card_body">
									<p>{item.content}</p>
								</div>
								<div className="note_card_button ">
									<button
										onClick={() => {
											showEdit(index);
										}}
									>
										Edit
									</button>
									<button
										onClick={() => {
											deleteNote(item._id);
										}}
									>
										Delete
									</button>
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
						name="title"
						id="edittitle"
						placeholder="Title"
						value={changedNote.title}
						onChange={handleChange}
					/>

					<textarea
						name="content"
						id="editcontent"
						cols="30"
						rows="10"
						placeholder="Type a note"
						value={changedNote.content}
						onChange={handleChange}
					></textarea>
					<div className="form_btn">
						<button onClick={saveEdit}>Save</button>
						<button onClick={toggleEdit}>Cancel</button>
					</div>
				</div>
			</div>
			{/*>>>>>>>>>>>>>>>>>>>   to add notes   >>>>>>>>>>>>>>>>>>>   */}

			<div className="overlay hidden">
				<div className="form">
					<label htmlFor="">Add Note</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Title"
						onChange={handleChangeAdd}
						value={addNote.title}
					/>

					<textarea
						name="content"
						id="content"
						cols="30"
						rows="10"
						placeholder="Type a note"
						onChange={handleChangeAdd}
						value={addNote.content}
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
