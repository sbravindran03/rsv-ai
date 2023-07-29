"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5568f763-fdf6-41ad-a3ae-a8c90e8f9c9c");
  }, []);

  return null;
};
