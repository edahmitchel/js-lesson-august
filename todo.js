const todoList = [];
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
  const input = document.querySelector("#input").value;
  const todo = document.querySelector("#todo-list");
  todo.innerHTML = "";
  todoList.push(input);
  render(todoList);
});
function render(li) {
  for (let i = 0; i < li.length; i++) {
    let divv = document.createElement("div");
    divv.innerHTML = `<input type="checkbox" id= name= value="CHECKED" />
        <label for=>${li[i]}</label>`;
    const todo = document.querySelector("#todo-list");
    todo.append(divv);
  }
}
