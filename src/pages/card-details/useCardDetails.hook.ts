import { useEffect, useState } from "react";
import { useContext } from "react";

import { useRouter } from "next/router";

import { useCardsContext } from "@/context/cards-context";
import {
  getCardsOfUser,
  getTransactionHistoryOfCard,
} from "@/services/card-api.service.ts";
import { arrangeHistoryByDate } from "@/services/util.service.ts";

export default function useCardDetails() {
  const { cardsData, setCardsData }: any = useCardsContext();
  const [historyData, setHistoryData]: any = useState({});
  const [card, setCard]: any = useState({});

  const router = useRouter();

  async function fetchData() {
    if (!cardsData[0]) {
      const response = await getCardsOfUser();
      setCardsData(response);
    }
    if (!router.isReady) return;
    const id = router.query.id;
    let item = cardsData.find((item: any) => item.id == id);
    setCard(item);
  }

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistoryOfCard(card?.id);
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    if (card?.id) fetchData();
  }, [card]);

  return {
    historyData,
    card,
  };
}
