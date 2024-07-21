const { globalShortcut, tauri } = window.__TAURI__;

window.initExplorerStore = function () {
  Alpine.store("explorer", {
    hidden: true,

    toggle() {
      this.hidden = !this.hidden;
    },
  });
};

const template = document.createElement("template");

const templateHTML = /*html*/ `
      <div
        id="explorer"
        x-init="initExplorerStore()"
        x-data
        x-show="!$store.explorer.hidden"
      >
        <div id="explorer-panel">
          <button id="openFile">Open file</button>
        </div>
      </div>
    `;
const templateCSS = /*css*/ `
#explorer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 4px;
  height: 100vh;
}

#explorer-panel {
  background-color: #040513;
  border-radius: 4px;
  padding: 4px;
}
`;

template.innerHTML = `<style>${templateCSS}</style>${templateHTML}`;

class Explorer extends HTMLElement {
  constructor() {
    super();

    globalShortcut.register("CommandOrControl+E", () => {
      Alpine.store("explorer").toggle();
    });

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    Alpine.initTree(this.shadowRoot);
  }
}

window.customElements.define("folder-explorer", Explorer);
