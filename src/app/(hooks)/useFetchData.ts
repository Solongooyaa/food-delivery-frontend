import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function useAuthFetch(path: string) {
  const { getToken } = useAuth();
  const [data, setData] = useState<any[]>([]);

  async function getFetchData() {
    const token = await getToken();

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`, {
      headers: {
        authentication: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    getFetchData();
  }, [path]);

  return { isLoading: !data, data, setData };
}

export function useAuthPost() {
  const { getToken } = useAuth();
  const onPost = async (postPath: string, body: any) => {
    const token = await getToken();
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${postPath}`, {
      method: "POST",
      headers: {
        authentication: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
}
