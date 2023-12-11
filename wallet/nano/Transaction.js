const Transaction = resource('Transaction')
const Wallet = resource('Wallet')

Transaction.beforeDelete(() => {
    throw new Error('Transaction deletion is not allowed')
})

Transaction.beforeCreate((transaction) => {
    // Get the wallet
    const wallet = Wallet.load(transaction.wallet)

    switch (transaction.type) {
        case 'DEPOSIT':
            wallet.balance += transaction.amount
            break
        case 'WITHDRAW':
            wallet.balance -= transaction.amount
            break
        case 'TRANSFER':
            if (!transaction.destinationWallet) {
                throw new Error('Destination wallet is required')
            }
            const destinationWallet = Wallet.load(transaction.destinationWallet)

            destinationWallet.balance += transaction.amount
            wallet.balance -= transaction.amount

            if (wallet.balance < 0) {
                throw new Error('Insufficient funds')
            }

            Wallet.save(destinationWallet)
            break
        default:
            throw new Error('Invalid transaction type')
    }

    Wallet.save(wallet)
});