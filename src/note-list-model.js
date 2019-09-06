(function (exports) {
  function NoteList() {
    this.noteArray = []
  };

  NoteList.prototype.noteText = function () {
    return this.noteArray
  }

  NoteList.prototype.addNoteToList = function(note = new Note){
    return this.noteArray.push(note)
  }
  exports.NoteList = NoteList
})(this)
