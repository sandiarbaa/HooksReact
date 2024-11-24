"use client";
import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import { useAppState } from "../context/state";

const Contact = () => {
  const { formData, setFormData } = useAppState();

  const handleClickButton = () => {
    setFormData((prev) => ({
      ...prev,
      name: "Budiono",
    }));
  };

  const handleClickButtonEmail = () => {
    setFormData((prev) => ({
      ...prev,
      email: "budiono@gmail.com",
    }));
  };

  return (
    <MainLayouts>
      <section>
        <div className="button" onClick={handleClickButton}>
          {formData.name}
        </div>
        <div className="button-email" onClick={handleClickButtonEmail}>
          {formData.email}
        </div>
      </section>
    </MainLayouts>
  );
};

export default Contact;
