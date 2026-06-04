export function calculateDiscount(orderAmount: number, isVip: boolean): number {
    if (orderAmount >= 1000) {
        return 5
    }

    return 0
}