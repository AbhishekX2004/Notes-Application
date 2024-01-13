import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [noting,setStatus] = React.useState(false);

    function updateStatus(){
        setStatus(true);
    }

    const [note, setNote] = React.useState({
        title: "",
        content: "",
    });

    function updateNote(event) {
        const { value, name } = event.target;
        setNote({
            ...note,
            [name]: value,
        });
    }

    function submitNote(event) {
        props.addNote(note);
        setNote({
          title: "",
          content: ""
        });
        setStatus(false)
        event.preventDefault();
      }

    return (
        <div>
        <form className="create-note">
            {noting && <input
            onChange={updateNote}
            name="title"
            placeholder="Title"
            value={note.title}
            />}
            
            <textarea
            onChange={updateNote}
            onClick = {updateStatus}
            name="content"
            placeholder="Take a note..."
            rows={noting ? 3 : 1}
            value={note.content}
            />
            <Zoom in = {noting}>
                <Fab
                    onClick={submitNote}
                >
                    <AddIcon />
                </Fab>
            </Zoom>
            
            
        </form>
        </div>
    );
}

export default CreateArea;
