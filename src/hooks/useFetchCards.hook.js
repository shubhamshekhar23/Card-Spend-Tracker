import { useState, useEffect } from "react";
import { getCardsOfUser } from "@/services/card-api.service";
import { useContext } from "react";
import { Cards_data } from "@/context/context";

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
