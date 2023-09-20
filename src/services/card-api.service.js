import {
  bankCardListMockData,
  debtCatalogueMockData,
  transactionHistoryMockData,
} from "@/mockdata/card.mockdata";

export const getCardsOfUser = async () => {
  return Promise.resolve(bankCardListMockData);
};

export const getDebtCatalogue = async () => {
  return Promise.resolve(debtCatalogueMockData);
};

export const getTransactionHistory = async () => {
  return Promise.resolve(transactionHistoryMockData);
};
