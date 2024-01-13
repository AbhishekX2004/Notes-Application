import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [list,setList] = React.useState([]);

	function updateList(note){
   		setList([...list,note]);
	}

	function deleteNote(id){
		setList((list.filter((note,index)=>{
			return id !== index;
		})));
	}

  	return (
    	<div>
      		<Header />
      		<CreateArea addNote = {updateList} />
			{list.map((note,index) => {
				return <Note key = {index} id = {index} title = {note.title} content = {note.content} del = {deleteNote}/>;
			})}
      		<Footer />
    	</div>
  	);
}

export default App;
