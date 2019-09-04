(function(exports){
  function Note(text) {
    this.text = text.substring(0, 20);
  };

  Note.prototype.noteText = function(string){
    return this.text = string;
  }

  // Note.prototype.shortText = function(){
  //   this.text.substring(0, 20)
  // }

  
  // Note.prototype.createNote = function(){
  //   return this.text
  // }

  exports.Note = Note
})(this);
