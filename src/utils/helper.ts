export const formattedDate = ({ date }: { date: string }) => {
    return new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'medium',
    }).format(new Date(date));
};

export const formattedCurrency = ({ amount }: { amount: number }) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};
