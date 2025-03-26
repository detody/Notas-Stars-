#hola mi gente como estan ? 

import random
import string
import tkinter as tk
from tkinter import messagebox

def generar_contraseña():
    longitud = 12  # Longitud fija de la contraseña
    caracteres = string.ascii_letters + string.digits + string.punctuation
    contraseña = ''.join(random.choice(caracteres) for _ in range(longitud))
    entry_contraseña.delete(0, tk.END)
    entry_contraseña.insert(0, contraseña)

def copiar_al_portapapeles():
    ventana.clipboard_clear()
    ventana.clipboard_append(entry_contraseña.get())
    ventana.update()
    messagebox.showinfo("Copiado", "Contraseña copiada al portapapeles")

# Crear ventana
ventana = tk.Tk()
ventana.title("Generador de Contraseñas")
ventana.geometry("300x300")

# Etiqueta
tk.Label(ventana, text="Contraseña Generada:").pack(pady=5)

# Campo de texto
entry_contraseña = tk.Entry(ventana, width=30)
entry_contraseña.pack()

# Botón para generar contraseña
btn_generar = tk.Button(ventana, text="Generar", command=generar_contraseña)
btn_generar.pack(pady=5)

# Botón para copiar al portapapeles
btn_copiar = tk.Button(ventana, text="Copiar", command=copiar_al_portapapeles)
btn_copiar.pack(pady=5)

ventana.mainloop()
