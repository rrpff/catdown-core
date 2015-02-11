// Define and export default keys
var keymap = module.exports = {
	// Bold
	"Ctrl-B": function(){
		this.controls.wrapSelections("**", "**");
	},

	// Italics
	"Ctrl-I": function(){
		this.controls.wrapSelections("_", "_");
	},

	// Strikethrough
	"Ctrl-Alt-U": function(){
		this.controls.wrapSelections("~~", "~~");
	},

	// Inline code
	"Ctrl-K": function(){
		this.controls.wrapSelections("`", "`");
	},

	// List
	"Ctrl-L": function(){
		this.controls.wrapSelections("* ");
	},

	// Blockquote
	"Ctrl-Q": function(){
		this.controls.wrapSelections("> ");
	},

	// Insert link
	"Shift-Ctrl-L": function(){
		this.controls.wrapSelections("[", "](http://)");
	},

	// Insert image
	"Shift-Ctrl-I": function(){
		this.controls.wrapSelections("![", "](http://)");
	}
}