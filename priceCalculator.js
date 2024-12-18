const { getDiscountRate } = require('./discount');

function calculateDiscountedPrice(originalPrice, userType) {
  const discountRate = getDiscountRate(userType);
  return originalPrice * (1 - discountRate);
}

module.exports = calculateDiscountedPrice;
