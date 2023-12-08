import { useEffect, useState } from "react";
import { useContext } from "react";

import { Cards_data } from "@/context/context";
import { getCardsOfUser } from "@/services/card-api.service.ts";

export default function useFetchCards() {
  const { cardsData, setCardsData }: any = useContext(Cards_data);

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
