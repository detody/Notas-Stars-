document.addEventListener("DOMContentLoaded", () => {
    const notePanel = document.querySelector(".note");
    const toolbar = document.querySelector(".note-toolbar");
    const boldBtn = document.querySelector(".note-toolbar button:nth-child(1)");
    const italicBtn = document.querySelector(".note-toolbar button:nth-child(2)");
    const underlineBtn = document.querySelector(".note-toolbar button:nth-child(3)");
    const fontSelect = document.querySelector(".note-toolbar select:nth-of-type(1)");
    const sizeSelect = document.querySelector(".note-toolbar select:nth-of-type(2)");
    const saveBtn = document.querySelector(".save-btn");
    const minimizeBtn = document.querySelector(".minimize-btn");
    const closeBtn = document.querySelector(".close-btn");
    const textArea = document.querySelector(".note-content");
    const savedNotesPanel = document.querySelector(".saved-notes");
    const minimizedPanel = document.querySelector(".minimized-notes");

    // Aplicar estilos al texto seleccionado
    boldBtn.addEventListener("click", () => document.execCommand("bold"));
    italicBtn.addEventListener("click", () => document.execCommand("italic"));
    underlineBtn.addEventListener("click", () => document.execCommand("underline"));

    // Cambio de fuente
    fontSelect.addEventListener("change", () => {
        textArea.style.fontFamily = fontSelect.value;
    });

    // Cambio de tamaño
    sizeSelect.addEventListener("change", () => {
        textArea.style.fontSize = sizeSelect.value;
    });

    // Guardar nota
    saveBtn.addEventListener("click", () => {
        if (textArea.value.trim() !== "") {
            const noteDiv = document.createElement("div");
            noteDiv.classList.add("saved-note");
            noteDiv.textContent = textArea.value;
            savedNotesPanel.appendChild(noteDiv);
            textArea.value = ""; // Limpiar el área de texto
        }
    });

    // Minimizar nota
    minimizeBtn.addEventListener("click", () => {
        if (textArea.value.trim() !== "") {
            const minNote = document.createElement("button");
            minNote.classList.add("minimized-note");
            minNote.textContent = "Nota Minimizada";
            minimizedPanel.appendChild(minNote);
            mainPanel.style.display = "none"; // Oculta la nota
        }
    });

    // Cerrar nota
    closeBtn.addEventListener("click", () => {
        mainPanel.style.display = "none"; // Oculta la nota
    });

    // Hacer que el panel se pueda mover
    let isDragging = false;
    let offsetX, offsetY;

    toolbar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - notePanel.offsetLeft;
        offsetY = e.clientY - notePanel.offsetTop;
        notePanel.style.position = "absolute";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            notePanel.style.left = `${e.clientX - offsetX}px`;
            notePanel.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
