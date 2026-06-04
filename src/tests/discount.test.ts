import { describe, it, expect } from 'vitest'
import { calculateDiscount } from '../discount'

describe('calculateDiscount', () => {

    it('не даёт скидку если заказ меньше 1000', () => {
        expect(calculateDiscount(999, false)).toBe(0)
    })

    it('даёт скидку 5% если заказ от 1000 до 4999', () => {
        expect(calculateDiscount(1000, false)).toBe(5)
        expect(calculateDiscount(4999, false)).toBe(5)
    })

    it('даёт скидку 10% если заказ от 5000', () => {
        expect(calculateDiscount(5000, false)).toBe(10)
        expect(calculateDiscount(9999, false)).toBe(10)
    })

    it('даёт доп. скидку 5% для VIP', () => {
        expect(calculateDiscount(999, true)).toBe(5)
        expect(calculateDiscount(1000, true)).toBe(10)
        expect(calculateDiscount(5000, true)).toBe(15)
    })

})