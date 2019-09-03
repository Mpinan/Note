(function(exports){
  function Note() {
    this.text = "";
  };

  Note.prototype.noteText = function(string){
    return this.text = string;
  }

  Note.prototype.createNote = function(){
    return this.text
  }

  exports.Note = Note
})(this);
