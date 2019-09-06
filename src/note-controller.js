// import { NoteList } from "./note-list-model";

// (function (exports) {
//   function noteController(noteList){
//     this.noteList = new NoteList
//     this.note = new Note("Favvourite drink: seltzer")
//     this.noteView = new NoteView
//     this.noteView = noteList
//   }
// })(this)















    document.getElementById('create_button').onclick = function () {
      const textarea = document.getElementById('note_input');
      //create a new Note Object
      var note = new Note();
      //creates a text in the area
      var text = textarea.value; 
      var newNote = note.noteText(text);
      var htmlToDisplay = note.htmlToDisplay();
      htmlToDisplay.innerText = newNote
      const notesDiv = document.getElementById('here');
      notesDiv.appendChild(htmlToDisplay)
      console.log(note)
      textarea.value = ''
    }