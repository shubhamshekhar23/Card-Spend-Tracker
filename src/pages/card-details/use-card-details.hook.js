import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Cards_data } from "@/context/context";
import {
  getTransactionHistoryOfCard,
  getCardsOfUser,
} from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";

export default function useCardDetailsHook() {
  const { cardsData, setCardsData } = useContext(Cards_data);
  const [historyData, setHistoryData] = useState({});
  const [card, setCard] = useState({});

  const router = useRouter();

  async function fetchData() {
    if (!cardsData) {
      const response = await getCardsOfUser();
      setCardsData(response);
    }
    if (!router.isReady) return;
    const id = router.query.id;
    let item = cardsData.find((item) => item.id == id);
    setCard(item);
  }

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistoryOfCard(card.id);
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    if (card.id) fetchData();
  }, [card]);

  return {
    historyData,
    card,
  };
}
