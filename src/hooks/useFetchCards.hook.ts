import { useEffect, useState } from "react";
import { useContext } from "react";

import { useCardsContext } from "@/context/cards-context";
import { getCardsOfUser } from "@/services/card-api.service.ts";

export default function useFetchCards() {
  const { cardsData, setCardsData }: any = useCardsContext();

  useEffect(() => {
    async function fetchData() {
      const response = await getCardsOfUser();
      setCardsData(response);
    }
    fetchData();
  }, []);

  return {
    cardsData,
  };
}
