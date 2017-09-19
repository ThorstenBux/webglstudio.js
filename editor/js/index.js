// This file is the webpack entry file.
// It loads core and litegui into the global context. Then it starts the Editor with CORE.init();
// It also exposes jquery into the global context.
// These variables are needed in the global context because that is how the WebGLEditor is implemented.
// There is huge potential in refactoring WebGLEditor to actually use js-modules and import/export functionality

//Add CORE, LiteGUI and $ into the global context
window.CORE = require('exports-loader?CORE!./core.js');
window.LiteGUI = require('exports-loader?LiteGUI!./extra/litegui.js');
//Something relies on CodeMirror to be available in the global context
window.CodeMirror = require("expose-loader?CodeMirror!codemirror");

//CodingPadWidget needs to be available as a global
window.CodingPadWidget = require('exports-loader?CodingPadWidget!./widgets/ui/codingPad.js')

//jquery needs to be available in the global context
$ = require("expose-loader?$!jquery");
window.$ = $;

CORE.init();