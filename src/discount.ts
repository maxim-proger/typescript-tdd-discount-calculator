const DISCOUNT_THRESHOLD_LOW = 1000
const DISCOUNT_THRESHOLD_HIGH = 5000
const DISCOUNT_LOW = 5
const DISCOUNT_HIGH = 10
const DISCOUNT_VIP = 5
const DISCOUNT_MAX = 20

export class DiscountCalculator {
    calculate(orderAmount: number, isVip: boolean): number {
        let discount = this.getBaseDiscount(orderAmount)
        discount = this.applyVip(discount, isVip)
        discount = this.capDiscount(discount)
        return discount
    }

    private getBaseDiscount(orderAmount: number): number {
        if (orderAmount >= DISCOUNT_THRESHOLD_HIGH) return DISCOUNT_HIGH
        if (orderAmount >= DISCOUNT_THRESHOLD_LOW) return DISCOUNT_LOW
        return 0
    }

    private applyVip(discount: number, isVip: boolean): number {
        return isVip ? discount + DISCOUNT_VIP : discount
    }

    private capDiscount(discount: number): number {
        return Math.min(discount, DISCOUNT_MAX)
    }
}