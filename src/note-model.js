(function(exports){
  function Note(text) {
    this.text = text
  };

  Note.prototype.noteText = function(){
    return this.text.substring(0, 20);
  }

  exports.Note = Note
  //a new tag is created and the ID is call app
  Note.prototype.htmlToDisplay = function(){
    const div = document.createElement('div');
    let abbreviatedText = this._shorten(this.text)
    div.innerText = abbreviatedText
    return div;
  }
})(this);
