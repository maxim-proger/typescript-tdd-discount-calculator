import { describe, it, expect } from 'vitest'
import { calculateDiscount } from '../discount'

describe('calculateDiscount', () => {

    it('не даёт скидку если заказ меньше 1000', () => {
        expect(calculateDiscount(999, false)).toBe(0)
    })

})