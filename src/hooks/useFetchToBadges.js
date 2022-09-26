import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch() {
  const url = "https://badges.twitch.tv/v1/badges/global/display";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [data, error, loading];
}
