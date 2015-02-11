// Compile Markdown to HTML and set preview element HTML.
var render = function(){
	var html = this.toHTML();
	this.$preview.innerHTML = html;
	this.signal("render", this.$preview, html);
}

// Render initially, and every time the content changes
module.exports = function(opts, editor, utils){
	if(this.$preview){
		// Bind to instance and make publicly accessible.
		this.render = render.bind(this);
		this.$preview = utils.unwrapElement(opts.preview);

		// Render initially and create render loop
		this.on("ready change", this.render);
	}
}