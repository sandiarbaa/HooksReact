"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface FormDataInterface {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface FormDataContextValue {
  formData: FormDataInterface;
  setFormData: React.Dispatch<React.SetStateAction<FormDataInterface>>;
}

interface FormDataContextProviderProps {
  children: ReactNode;
}

const FormDataContext = createContext<FormDataContextValue | undefined>(
  undefined
);

const FormDataContextProvider = ({
  children,
}: FormDataContextProviderProps) => {
  const [formData, setFormData] = useState<FormDataInterface>({
    id: 1,
    name: "Abdul",
    email: "abdul@gmail.com",
    password: "password",
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// export const FormData = FormDataContext;
// Create a custom hook to access the context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error(
      "useFormData must be used within a FormDataContextProvider"
    );
  }
  return context;
};

export default FormDataContextProvider;
