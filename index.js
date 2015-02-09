// Catdown is designed to be super modular, so most of
// the functionality is in plugins. Import and use all
// the core plugins.
module.exports = function(opts){

	this.use(require("./lib/events"));

	// Render loop if preview el is attached
    this.use(require("./lib/render"), {
        preview: opts.preview
    });

    // Additional editor controls
    this.use(require("./lib/controls"));

    // Basic formatting keys eg Ctrl-B
    this.use(require("./lib/keys"));

}