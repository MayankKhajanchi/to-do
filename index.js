let list = [
  { title: 'Lets', description: 'colonize' },
  { title: 'Mars', description: 'before' },
  { title: 'we', description: 'save' },
  { title: 'planet', description: 'Earth !' },
];
let editIndex;
let oldValue = '';

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
    <div class="clear" onclick="deleteItem(${index})"><i class="fas fa-times"></i></div>
    <div class="edit" onclick="editItem(${index})" data-toggle="modal" data-target="#editModal"><i class="fas fa-pencil-alt"></i></div>
  </div>`)
  })
}
populate();

function addTodo(event) {
  event.preventDefault();
  const todo = { title: '', description: '' };
  todo.title = $('#title').val();
  todo.description = $('#desc').val();
  let duplicacyCheck = [];
  list.map((item) => {
    duplicacyCheck.push(item.title.toLowerCase());
  })
  if (duplicacyCheck.indexOf(todo.title.toLowerCase()) != -1) {
    $('#duplicacy').modal('show');
  } else {
    list.unshift(todo);
  }
  $('#title').val('');
  $('#desc').val('');
  populate();
}

function deleteItem(index) {
  list.splice(index, 1);
  populate();
}

function editItem(index) {
  oldValue = list[index].title;
  const edit = list[index];
  editIndex = index;
  $('.modal-body #title').val(edit.title);
  $('.modal-body #desc').val(edit.description);
};

function saveEdited() {
  event.preventDefault();
  let check = list.filter(item => item.title.toLowerCase() === $('.modal-body #title').val().toLowerCase() && item.title.toLowerCase() !== oldValue.toLowerCase());
  if (check.length == 0) {
    list[editIndex].title = $('.modal-body #title').val();
    list[editIndex].description = $('.modal-body #desc').val();
    populate();
    $('#editModal').modal('hide');
  } else {
    $('#duplicacy').modal('show');
  }
}
