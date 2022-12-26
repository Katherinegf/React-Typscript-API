const currencyFormat = new Intl.NumberFormat('sv-se', { currency: 'SEK', style: 'currency'})

export const currencyFormatter = (value: number) => {
    return currencyFormat.format(value)
}