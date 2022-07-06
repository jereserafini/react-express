const fs = require('fs')

const saveNotes = async ( req, res ) => {
    try {

        const {notes} = req.body
        await fs.promises.writeFile( 'db/notes.json', JSON.stringify(notes))
        
        console.log(req.body);
        
        res.status(200)

    } catch (error) {
        res
        .status(error.statusCode ? error.statusCode : 500)
        .json({ error: error.message });
    }  

}

module.exports = saveNotes