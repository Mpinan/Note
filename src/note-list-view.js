(function(exports){
  function NoteView(noteList = new NoteList){
    this.noteList = noteList
  }
  NoteView.prototype.convert = function(){
    var html = document.createElement('div');
    console.log(html)
    console.log("Hello")

    var note = note.text
    html.innerText = note
    tag1 = document.createElement("li")
    tag1.appendChild(html)

    this.noteList.view().map(function(note){
      html += note.text;
      html += '</div></li><li><div>';
    });
    hmtl += '</div></li></ul>';
    return html
  }

  exports.NoteView = NoteView
})(this)

// onload="window.alert('Welcome to my To do List!');"

