import { describe, it, expect } from 'vitest'
import { DiscountCalculator } from '../discount'

const calculator = new DiscountCalculator()

describe('DiscountCalculator', () => {

    it('не даёт скидку если заказ меньше 1000', () => {
        expect(calculator.calculate(999, false)).toBe(0)
    })

    it('даёт скидку 5% если заказ от 1000 до 4999', () => {
        expect(calculator.calculate(1000, false)).toBe(5)
        expect(calculator.calculate(4999, false)).toBe(5)
    })

    it('даёт скидку 10% если заказ от 5000', () => {
        expect(calculator.calculate(5000, false)).toBe(10)
        expect(calculator.calculate(9999, false)).toBe(10)
    })

    it('даёт доп. скидку 5% для VIP', () => {
        expect(calculator.calculate(999, true)).toBe(5)
        expect(calculator.calculate(1000, true)).toBe(10)
        expect(calculator.calculate(5000, true)).toBe(15)
    })

    it('скидка не превышает 20% максимум', () => {
        expect(calculator.calculate(5000, true)).toBeLessThanOrEqual(20)
    })

})