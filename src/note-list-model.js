(function (exports) {
  function NoteList() {
    this.noteArray = []
  };

  NoteList.prototype.noteText = function () {
    return this.noteArray
  }

  NoteList.prototype.addNoteToList = function(text){
    note = new Note(text);
    return this.noteArray.push(note);
  }
  exports.NoteList = NoteList
})(this);
