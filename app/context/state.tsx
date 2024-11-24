"use client";
import React, { createContext, useState, useContext } from "react";
import {
  StateContextProviderProps,
  AppStateContextValue,
  FormDataState,
} from "../types/types";

const StateContext = createContext<AppStateContextValue | undefined>(undefined);

export const StateContextProvider = ({
  children,
}: StateContextProviderProps) => {
  const [formData, setFormData] = useState<FormDataState>({
    id: 1,
    name: "Abdul",
    email: "abdul@gmail.com",
    password: "password",
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{ formData, setFormData, isDarkMode, setIsDarkMode }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within a StateContextProvider");
  }
  return context;
};
