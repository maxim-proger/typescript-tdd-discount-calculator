const DISCOUNT_THRESHOLD_LOW = 1000
const DISCOUNT_THRESHOLD_HIGH = 5000
const DISCOUNT_LOW = 5
const DISCOUNT_HIGH = 10
const DISCOUNT_VIP = 5
const DISCOUNT_MAX = 20

// возвращает процент скидки от 0 до 20
export function calculateDiscount(orderAmount: number, isVip: boolean): number {
    let discount = 0

    discount = getBaseDiscount(orderAmount)
    discount = applyVip(discount, isVip)
    discount = capDiscount(discount)

    return discount
}

// вычисляет базовую скидку
function getBaseDiscount(orderAmount: number): number {
    let discount = 0

    if (orderAmount >= DISCOUNT_THRESHOLD_HIGH) {
        discount = DISCOUNT_HIGH
    } else if (orderAmount >= DISCOUNT_THRESHOLD_LOW) {
        discount = DISCOUNT_LOW
    }

    return discount
}

// вычисляет доп. скидку для вип
function applyVip(discount: number, isVip: boolean): number {
    if (isVip) {
        discount += DISCOUNT_VIP
    }

    return discount
}

// ограничивает суммарную скидку
function capDiscount(discount: number): number {
    return Math.min(discount, DISCOUNT_MAX)
}
