Array.prototype.borrar = function(element) {
	for (var i = 0; i < this.length; i++){
		if (this[i] === element){
			this.splice(i,1);
		}
	}
}