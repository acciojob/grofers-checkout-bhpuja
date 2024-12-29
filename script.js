
// Function to calculate the total price and update the table
document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("grocery-table");
    const prices = document.querySelectorAll(".prices");

    let totalPrice = 0;

    // Calculate the total price
    prices.forEach(priceCell => {
        totalPrice += parseFloat(priceCell.textContent);
    });

    // Create a new row for the total price
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total price: ₹${totalPrice.toFixed(2)}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
});
