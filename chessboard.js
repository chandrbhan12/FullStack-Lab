let board = document.getElementById("chessboard");

// Chess pieces
let pieces = [
    "\u265c", "\u265e", "\u265d", "\u265b", "\u265a", "\u265d", "\u265e", "\u265c",
    "\u265f", "\u265f", "\u265f", "\u265f", "\u265f", "\u265f", "\u265f", "\u265f",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659",
    "\u2656", "\u2658", "\u2657", "\u2655", "\u2654", "\u2657", "\u2658", "\u2656"
];

// Create 64 squares
for (let i = 0; i < 64; i++) {

    let square = document.createElement("div");
    square.className = "square";

    // Add chess pieces
    square.innerText = pieces[i];

    // Set square colors
    if (Math.floor(i / 8) % 2 === 0) {
        square.classList.add(i % 2 === 0 ? "light" : "dark");
    } else {
        square.classList.add(i % 2 === 0 ? "dark" : "light");
    }

    // Add square to board
    board.appendChild(square);
}
