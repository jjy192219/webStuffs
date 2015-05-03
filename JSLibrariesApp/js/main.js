//taskarray

var taskArray = [];

//savetask

var saveTask = function(){
	var newTask = $('#newTask').val();


	//add the value to the task array
	taskArray.push(newTask);

	//EMPTY THE Array
	$('#newTask').val('');

	//fire the updateTask
	updateTasks();

	//log the task array
	console.log(taskArray);

}


//updatetask

var updateTasks = function(){

	$('#taskList').empty();

	$(taskArray).each(function(i){

		console.log('task'+i+':'+ this);

		var deleteButton = $('<button/>');
		deleteButton.attr('id', 'deleteButton').text('X').click(function(e){
			deleteTask(e);

		});

		var newTask = $('<div/>');
		newTask.attr('id', i).addClass('task').html('<p>' + this + '</p>');

		newTask.append(deleteButton);

		$('#taskList').append(newTask);
	})
}

//deletetask
var deleteTask = function(e){

	var taskNumber = e.target.parentElement.id;
	taskArray.splice(taskNumber, 1);
	updateTasks();
}

//init
var init = function(){

	console.log("heck yeah libraries!");

	$('#addButton').on('click', function(e){

		e.preventDefault();
		saveTask();
	})

};

//load iistener 

$(document).ready(init);