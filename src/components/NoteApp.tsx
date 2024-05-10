import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";
import { SortByType } from '../types/SortBy';

type SortByProps ={ 
  sortBy:SortByType
}
function NoteApp({sortBy } : SortByProps) {
  return (
    <div className="note-app">
    <AddNewNote />
    <div className="note-container">
      <NoteStatus />
      <NoteList sortBy={sortBy} />
    </div>
  </div>
  )
}

export default NoteApp