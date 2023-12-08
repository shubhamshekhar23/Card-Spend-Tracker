export interface CardInfo {
  abbv: string;
  bankName: string;
  number: string;
  expiry: string;
  type: "mastercard" | "visa" | "amex" | string; // Adjust the string union type based on possible card types
  cvv: number;
}

export interface Card {
  id: number;
  cardTitle: string;
  balance: number;
  info: CardInfo;
}
