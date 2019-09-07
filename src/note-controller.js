// import { NoteList } from "./note-list-model";
(function (exports) {

   function NoteController(noteList) {
    this.noteList = noteList
    noteList.addNoteToList("Hello");
    this.noteView = new NoteView(noteList);
    this.htmlString = noteView.convert()
  };
  
  NoteController.prototype.passingHtml = function(htmlString) {
    htmlString = this.htmlString
    document.getElementById("app").innerHTML = htmlString
  }
  //document.getElementById("app").innerText = "Hello Platano"
  exports.NoteController = NoteController
 })(this)














    // document.getElementById('create_button').onclick = function () {
    //   const textarea = document.getElementById('note_input');
    //   //create a new Note Object
    //   var note = new Note();
    //   //creates a text in the area
    //   var text = textarea.value; 
    //   var newNote = note.noteText(text);
    //   var htmlToDisplay = note.htmlToDisplay();
    //   htmlToDisplay.innerText = newNote
    //   const notesDiv = document.getElementById('here');
    //   notesDiv.appendChild(htmlToDisplay)
    //   console.log(note)
    //   textarea.value = ''
    // }