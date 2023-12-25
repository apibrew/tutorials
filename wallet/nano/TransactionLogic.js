const Account = resource('Account')
const Transaction = resource('Transaction')

Account.balance.compute((account) => {
    const sourceSum = Transaction.sum('amount', {
        sourceAccount: account.id
    })

    const destinationSum = Transaction.sum('amount', {
        destinationAccount: account.id
    })

    return destinationSum - sourceSum
}, [Transaction.sourceAccount, Transaction.destinationAccount])

Transaction.beforeCreate(transaction => {
    const sourceAccount = Account.load(transaction.sourceAccount)

    if (sourceAccount.balance < transaction.amount) {
        throw new Error('Insufficient funds')
    }
})
