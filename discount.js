// Simulates fetching discount rate (e.g., from an API or database)
function getDiscountRate(userType) {
    if (userType === 'premium') return 0.2; // 20% discount
    if (userType === 'regular') return 0.1; // 10% discount
    return 0; // No discount
  }
  
  module.exports = { getDiscountRate };
  