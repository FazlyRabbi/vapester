import { createContext, useEffect, useState } from "react";
import { NEXT_URL } from "@/config/index";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [looding, setLooding] = useState(true);
  const [sliderImage, setSliderImage] = useState(null);

  useEffect(() => {
    checkUserLoggedId();
  }, []);

  const signup = async ({ username, email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.user) {
      setUser(data);
    } else {
      setError(data);
    }
  };

  const singin = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/signin`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await res.json();

    if (data.user) {
      setUser(data);
    } else {
      setError(data);
    }
  };

  const sinout = async (user) => {
    console.log(user);
  };

  const checkUserLoggedId = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  const getHomeSliderImage = async () => {
    const res = await fetch(
      "http://localhost:1337/api/service-page-slider?populate=*"
    );
    const data = await res.json();
    setSliderImage(data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        singin,
        signup,
        sinout,
        checkUserLoggedId,
        looding,
        sliderImage,
        getHomeSliderImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};