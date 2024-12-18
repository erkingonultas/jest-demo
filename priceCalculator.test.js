const calculateDiscountedPrice = require('./priceCalculator');
const { getDiscountRate } = require('./discount');

// Mock the external module
jest.mock('./discount', () => ({
  getDiscountRate: jest.fn(),
}));

describe('calculateDiscountedPrice', () => {
  test('applies 20% discount for premium users', () => {
    getDiscountRate.mockReturnValue(0.2); // Mock discount rate
    const result = calculateDiscountedPrice(100, 'premium');
    expect(result).toBe(80);
  });

  test('applies 10% discount for regular users', () => {
    getDiscountRate.mockReturnValue(0.1); // Mock discount rate
    const result = calculateDiscountedPrice(100, 'regular');
    expect(result).toBe(90);
  });

  test('applies no discount for other users', () => {
    getDiscountRate.mockReturnValue(0); // Mock discount rate
    const result = calculateDiscountedPrice(100, 'guest');
    expect(result).toBe(100);
  });

  test('ensures getDiscountRate is called with correct arguments', () => {
    calculateDiscountedPrice(100, 'premium');
    expect(getDiscountRate).toHaveBeenCalledWith('premium');
  });
});
