(function(exports){
  function NoteView(){
    this.noteList = new NoteList
  }

NoteView.prototype.viewNotes = function(){
  return "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
}


  exports.NoteView = NoteView
})