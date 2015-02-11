// Add some extra editor functions to Catdown instance
module.exports = function(opts, editor){

    // Bind everything to a controller object
    var controls = this.controls = {};

    // Change column cursor is on.
    // num is positive or negative number.
    controls.moveCursorX = function(num){
        var cursor = editor.getCursor();
        cursor.ch = cursor.ch + num;
        editor.setCursor(cursor);
    }

    // Change line cursor is on.
    // num is positive or negative number.
    controls.moveCursorY = function(num){
        var cursor = editor.getCursor();
        cursor.line = cursor.line + num;
        editor.setCursor(cursor);
    }

    // Surround current selection with str.
    controls.wrapSelections = function(left, right){
        // Get all selected regions
        var selections = editor.getSelections();

        // Make replacements
        var replacements = selections.map(function(sel){
            return left + sel + (right || "");
        });

        // Replace selected text and deselect
        editor.replaceSelections(replacements);

        // Move cursor back between surrounds
        if(right) controls.moveCursorX(-right.length);
    }

}
