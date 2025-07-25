export const mockTransactions = [
  {
    hash: "0xabc123",
    timestamp: "2024-06-15 14:20",
    type: "Purchase",
    token: "GBD",
    amount: "120.00",
    status: "Confirmed",
    link: "https://etherscan.io/tx/0xabc123",
  },
  {
    hash: "0xdef456",
    timestamp: "2024-06-12 09:45",
    type: "Investment",
    token: "GBD",
    amount: "500.00",
    status: "Pending",
    link: "https://etherscan.io/tx/0xdef456",
  },
  {
    hash: "0xghi789",
    timestamp: "2024-06-10 18:30",
    type: "Withdrawal",
    token: "GBD",
    amount: "200.00",
    status: "Confirmed",
    link: "https://etherscan.io/tx/0xghi789",
  },
  {
    hash: "0xpayout123",
    timestamp: "2025-06-21 12:00",
    type: "Payout",
    token: "GBD",
    amount: "88.50",
    status: "Settled",
    link: "https://etherscan.io/tx/0xpayout123",
    contractAddress: "0xDividendContract",
  },
  {
    hash: "0xabc123",
    timestamp: "2025-06-20 14:20",
    type: "Purchase",
    token: "GBD",
    amount: "150.00",
    status: "Escrowed",
    link: "https://etherscan.io/tx/0xabc123",
    contractAddress: "0xEscrowContract123",
  },
  {
    hash: "0xdef456",
    timestamp: "2025-06-15 12:10",
    type: "Payout",
    token: "GBD",
    amount: "90.00",
    status: "Settled",
    link: "https://etherscan.io/tx/0xdef456",
    contractAddress: "0xInvestmentContract456",
    investmentId: "0xinvest789",
  },

];
