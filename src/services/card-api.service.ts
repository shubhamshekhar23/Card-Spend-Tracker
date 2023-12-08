import { bankCardListMockData } from "@/mockdata/card-list.mockdata";
import { debtCatalogueMockData } from "@/mockdata/catalogue.mockdata";
import { transactionHistoryMockData } from "@/mockdata/transaction-history.mockdata";
import { cardOneTransactionHistoryMockData } from "@/mockdata/card1-transact-history.mockdata";
import { cardTwoTransactionHistoryMockData } from "@/mockdata/card2-transact-history.mockdata";
import { generateRandomId } from "./util.service";

async function mockPromiseDelay(data: any, delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

export const getCardsOfUser = async () => {
  return mockPromiseDelay(bankCardListMockData, 500);
};

export const getDebtCatalogue = async () => {
  return mockPromiseDelay(debtCatalogueMockData, 300);
};

export const getTransactionHistory = async () => {
  return mockPromiseDelay(transactionHistoryMockData, 200);
};

export const getTransactionHistoryOfCard = async (id: any) => {
  if (id == 1) return mockPromiseDelay(cardOneTransactionHistoryMockData, 600);
  if (id == 2) return mockPromiseDelay(cardTwoTransactionHistoryMockData, 600);
};

export const saveManualTransaction = async (payload: any) => {
  /* would be a post request and after successful request it would return all data */
  const id = generateRandomId();
  payload["id"] = id;
  const result = [payload, ...transactionHistoryMockData];
  return mockPromiseDelay(result, 900);
};
