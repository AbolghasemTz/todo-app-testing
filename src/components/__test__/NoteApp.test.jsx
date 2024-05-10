import NoteApp from "../NoteApp";
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "../../test-utils";


function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/Note title/i);
  const inputDescription = screen.getByPlaceholderText(/Note description/i);

  const button = screen.getByRole("button", { name: /Add New Note/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, {
      target: { value: note.description },
    });
    fireEvent.click(button);
  });
}
test("Note App #1 : should input be empty after submit ", () => {
  render(<NoteApp sortBy="/latest" />);
  addNote([{ title: "Note one title", description: "Note one description" }]);
  const inputTitle = screen.getByPlaceholderText(/Note title/i);
  const inputDescription = screen.getByPlaceholderText(/Note description/i);
  expect(inputTitle.value).toBe("");
  expect(inputDescription.value).toBe("");
});
test("Note App #2 : should add multiple items ", () => {
  render(<NoteApp sortBy="/latest" />);
  addNote([
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
  ]);
  const divElemnts = screen.getAllByTestId("note-item");
  expect(divElemnts.length).toBe(3);
});
test("Note App #3 : should not have active class when initial rendered  ", () => {
  render(<NoteApp sortBy="/latest" />);
  addNote([{ title: "Note one title", description: "Note one description" }]);
  const divElemnt = screen.getByTestId("note-item");
  expect(divElemnt).not.toHaveClass("completed");
});
test("Note App #4 : should have active class when item click  ", () => {
  render(<NoteApp sortBy="/latest" />);
  addNote([{ title: "Note one title", description: "Note one description" }]);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const divElemnt = screen.getByTestId("note-item");
  expect(divElemnt).toHaveClass("completed");
});
