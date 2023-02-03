var colors = ['#c71b1b', '#d16e1c', '#c9d61b', '#2ea713', '#106193'];

const date = new Date();
if(date.getMonth() == 5){
	colors = ['#ffffff', '#ffafc7', '#73d7ee', '#613915', '#000000', '#e50000', '#ff8d00', '#ffee00', '#028121', '#004cff', '#760088'];
}
else if(date.getMonth() == 11){
	colors = ['#ffffff', '#e50000', '#ffffff', '#e50000']
}
else if(date.getMonth == 0 && date.getDate == 24){
	colors = ['#106193', '#2ea713', '#c9d61b', '#d16e1c', '#c71b1b'];
}