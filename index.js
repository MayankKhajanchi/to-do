let list = [
  { title: 'Lets', description: 'colonize' },
  { title: 'Mars', description: 'before' },
  { title: 'we', description: 'save' },
  { title: 'planet', description: 'Earth !' },
];
function addTodo() {
  event.preventDefault();
  console.log('hey')
}
function populate() {
  $('.card-columns').empty();
  list.map((item, index) => {
    $('.card-columns').append(`<div class="card card1">
    <div class="content">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  </div>`)
  })
}
populate();
function addTodo(event) {
  event.preventDefault();
  const todo = { title: '', description: '' };
  todo.title = $('#title').val();
  todo.description = $('#desc').val();
  console.log(todo);
  list.push(todo);
  $('#title').val('');
  $('#desc').val('');
  populate();
}