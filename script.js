
// Function to calculate the total price and update the table
function calculateTotalPrice() {
    // Get all elements with the class 'prices'
    const priceElements = document.querySelectorAll('.prices');
    
    // Calculate the sum of prices
    let total = 0;
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });

    // Check if the total row already exists, remove it if it does
    const existingTotalRow = document.querySelector('#totalRow');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const totalRow = document.createElement('tr');
    totalRow.id = 'totalRow'; // Add an ID to identify the total row
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Make it span across the table
    totalCell.textContent = `Total Price: ${total}`;
    totalRow.appendChild(totalCell);

    // Append the total row to the table
    const table = document.getElementById('groceryTable');
    table.appendChild(totalRow);
}

// Call the function initially
calculateTotalPrice();
