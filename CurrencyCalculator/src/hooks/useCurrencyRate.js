import { useState, useEffect } from "react";

function useCurrencyRate(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!currency) return;
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => setData(res[currency]))
      .catch((err) => setError(err));
  }, [currency]);

  return [data,error];
}

export default useCurrencyRate;
