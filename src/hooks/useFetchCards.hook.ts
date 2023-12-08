import { useEffect, useState } from "react";
import { useContext } from "react";

import { useCardsContext } from "@/context/cards-context";
import { useGlobalContext } from "@/context/global-context";
import { getCardsOfUser } from "@/services/card-api.service.ts";

export default function useFetchCards() {
  const { cardsData, setCardsData }: any = useCardsContext();
  const { isLoading, setIsLoading }: any = useGlobalContext();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getCardsOfUser();
      setCardsData(response);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return {
    cardsData,
  };
}
