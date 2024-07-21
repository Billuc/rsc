let editor;

require.config({
  paths: { vs: "/assets/monaco-editor-0.50.0/package/min/vs" },
});
require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    automaticLayout: true,
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
    theme: "vs-dark",
  });
});

window._editor = editor;
