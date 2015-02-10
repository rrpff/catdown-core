module.exports = function(opts, editor){
	// Get default keys and bind their functions
	// to Catdown instance.
	this.keymap = require("./keymap");
	for(var key in this.keymap)
		this.keymap[key] = this.keymap[key].bind(this);

	// CodeMirror's "extraKeys" option replaces the old
	// keymap when it's used. This appends any new keys to the 
	// old map and uses that so you don't overwrite keys.
	this.setKeys = function(obj){
		for(var key in obj) this.keymap[key] = obj[key];
		editor.setOption("extraKeys", this.keymap);
	}

	// Set default keys on editor.
	this.setKeys(this.keymap);
}