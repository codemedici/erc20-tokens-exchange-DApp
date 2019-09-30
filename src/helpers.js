export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'
export const DECIMALS = 10 ** 18

export const ether = (wei) => {
	if (wei) {
		return wei / DECIMALS
	}
}

export const tokens = (n) => ether(n)

export const formatBalance = (balance) => {
	balance = ether(balance)
	balance = Math.round(balance * 100) / 100
	return balance
}