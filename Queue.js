var queue = []

function newEntry() {
	queue.push(document.getElementById("newName").value);
	document.getElementById("newName").value="";
};

function nextInLine() {
if(queue.length > 0) {
	document.getElementById("Front").innerHTML = queue.shift()
} else {
	return document.getElementById("Front").innerHTML = "The Line Is Empty!";
}
};
