(function (exports) {
  function NoteList() {
    this.noteArray = []
  };

  NoteList.prototype.noteText = function () {
    return this.noteArray
  }

  NoteList.prototype.addNoteToList = function(note){
    return this.noteArray.push(note)
  }
  NoteList.prototype.printNoteList = function(){

    this.noteArray.forEach(function (note) {
    console.log(note.text);
    });
  }
  exports.NoteList = NoteList
})(this)
