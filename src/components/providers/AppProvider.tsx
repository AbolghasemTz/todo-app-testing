import { NotesProvider } from "../../context/NotesContext";

export default function AppProvider({children}) {
    return <NotesProvider>{children}</NotesProvider>
}