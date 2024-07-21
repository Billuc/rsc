const { tauri, dialog, globalShortcut } = window.__TAURI__;

await globalShortcut.unregisterAll();

// document.getElementById("openFile").addEventListener("click", async (_) => {
//   const file = await dialog.open();
//   const content = await tauri.invoke("read_file", {
//     filePath: file,
//   });
//   window._editor.setValue(content);
// });
