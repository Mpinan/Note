(function(exports){
  function NoteView(noteList){
    this.noteList = noteList
  }
  NoteView.prototype.convert = function(){
    //After creating a note, that note is added to the noteList.noteArray
    // and we iterate over it adding html to it in a string form
    // Creates a tag in a string form, 
    // so js understands and adds it for every note we write.
    // so we can convert it into real HTML later on in the controller.
    var tagJoin = this.noteList.noteArray.map(function(note){
      var html = '<div><li>';
      html += note.text
      html += '</div></li>';
      return html
    });
    var ul = '<ul>'
    tagJoin = tagJoin.join('');
    ul += tagJoin
    ul += '</ul>';
    return ul
  }

  exports.NoteView = NoteView
})(this)

// onload="window.alert('Welcome to my To do List!');"

