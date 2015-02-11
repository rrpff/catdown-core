# catdown-core

The core plugins for the [Catdown](https://github.com/zuren/catdown) Markdown editor. Included by default.

### Events

EventEmitter extracted from CodeMirror and extended. Now allows multiple event names and is manually bound to Catdown instance.

#### Usage

```js
// Add a handler to an event
editor.on("render", handler);

// Add a handler to multiple events
editor.on("ready change", handler);

// Signal an event with some args, calling any handlers listening to it.
editor.signal("something", 1, 2, 3);
```

### Render

Accepts a `preview` DOM element or jQuery object. On editor `ready` and `change` events, converts editor value to HTML using the Catdown `parser` and displays it in the preview.

### Keys

Key handling functionality. Accepts a hash of key combinations and handlers and binds to CodeMirror instance. Unlike CodeMirror's `editor.setOption("extraKeys", hash);`, it extends the existing keymap rather than replacing it. The syntax is identical though.

#### Usage

```js
editor.keys({
	"Ctrl-Shift-Up": function(){
		// add your functionality
	}
});
```

#### Default keymap

* `Ctrl-B` - Bold
* `Ctrl-I` - Italics
* `Ctrl-Alt-U` - Strikethrough
* `Ctrl-K` - Inline code
* `Ctrl-L` - List
* `Ctrl-Q` - Blockquote
* `Shift-Ctrl-L` - Insert link
* `Shift-Ctrl-I` - Insert image

### Controls

Adds some additional CodeMirror functionality to Catdown. `moveCursorX`, `moveCursorY` and `wrapSelection` are available in `editor.controls`.

#### `moveCursorX(int)`

Move cursor horizontally. Positive number goes right, negative goes left.

```js
// Move three spaces back
editor.controls.moveCursorX(-3);
```

#### `moveCursorY(int)`

Move cursor vertically. Positive number goes down, negative goes up.

```js
// Move two lines down
editor.controls.moveCursorY(2);
```

#### wrapSelections(leftStr, rightStr)

Wrap current selections between two strings. `rightStr` is empty by default so not required.

```js
// Make the current selections bold
editor.controls.wrapSelection("**", "**");
```