(function(exports){
  function NoteView(noteList){
    this.noteList = noteList
  }
  NoteView.prototype.convert = function(){

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

