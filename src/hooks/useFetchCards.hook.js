import { useEffect,useState } from "react";
import { useContext } from "react";

import { Cards_data } from "@/context/context";
import { getCardsOfUser } from "@/services/card-api.service";

export default function useFetchCards() {
  const { cardsData, setCardsData } = useContext(Cards_data);

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
