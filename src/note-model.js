(function(exports){
  function Note(text) {
    this.text = text
  };

  Note.prototype.noteText = function(string){
    return this.text = string.substring(0, 20);
  }

  exports.Note = Note

  Note.prototype.htmlToDisplay = function(){
    const div = document.createElement('div');
    let abbreviatedText = this._shorten(this.text)
    div.innerText = abbreviatedText
    return div;
  }
})(this);
