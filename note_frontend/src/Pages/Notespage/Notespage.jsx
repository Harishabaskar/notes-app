import "./Notespage.css";

function Notespage() {
	return (
		<div className="notespage">
			<div className="addbutton">
				<button>Add</button>
			</div>

			<div className="form">
                <label htmlFor="">Add Note</label>
                <input type="text" name="title" id="title" placeholder = "Title"/>
                
                <textarea name="content" id="content"  cols="30" rows="10" placeholder="Type a note"></textarea>
            </div>
		</div>
	);
}

export default Notespage;
