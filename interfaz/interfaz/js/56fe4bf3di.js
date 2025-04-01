    // Lista de IDs de botones y sus sufijos únicos
    const buttons = [
        { id: "button1", suffix: "VVFSF6NM" },
        { id: "button2", suffix: "MPSGGKG4" },
        { id: "button3", suffix: "1SD17FUB" },
        { id: "button4", suffix: "388BITA5" },
        { id: "button5", suffix: "SRAQSUNN" },
        { id: "button6", suffix: "IJALQFUI" },
        { id: "button7", suffix: "JNR8JVPW" }
    ];

    // Función para agregar eventos a los botones
    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener("click", () => {
            window.open(`https://cwallet.com/t/${button.suffix}`, "_blank");
        });
    });