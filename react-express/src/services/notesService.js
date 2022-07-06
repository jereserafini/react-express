import axios from "axios";

export const saveNotes = async (notes) => {

    await axios.post('http://localhost:8080/notes', {notes})

}

export const getNotes = async (setNotes) => {

    const peticion = await axios.get('http://localhost:8080/notes')
    
    setNotes(peticion.data);

}