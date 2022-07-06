import axios from "axios";

export const saveNotes = async (notes) => {

    await axios.post('http://localhost:8080/notes', {notes})

}