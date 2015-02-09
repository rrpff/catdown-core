// Define and export default keys
var keymap = module.exports = {
	// Bold
	"Ctrl-B": function(){
		this._surroundSelection("**", "**");
	},

	// Italics
	"Ctrl-I": function(){
		this._surroundSelection("_", "_");
	},

	// Strikethrough
	"Ctrl-Alt-U": function(){
		this._surroundSelection("~~", "~~");
	},

	// Inline code
	"Ctrl-K": function(){
		this._surroundSelection("`", "`");
	},

	// List
	"Ctrl-L": function(){
		this._surroundSelection("* ");
	},

	// Blockquote
	"Ctrl-Q": function(){
		this._surroundSelection("> ");
	},

	// Insert link
	"Shift-Ctrl-L": function(){
		this._surroundSelection("[", "](http://)");
	},

	// Insert image
	"Shift-Ctrl-I": function(){
		this._surroundSelection("![", "](http://)");
	}
}