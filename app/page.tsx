"use client";
import { useAppState } from "./context/state";

export default function Home() {
  const { formData, setFormData, isDarkMode, setIsDarkMode } = useAppState(); // Mengakses semua state

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

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main
      className={`p-5 flex justify-between items-center ${
        isDarkMode ? "bg-slate-500" : "bg-white"
      } h-screen`}
    >
      <section>
        <div className="button" onClick={handleClickButton}>
          {formData.name}
        </div>
        <div className="button-email" onClick={handleClickButtonEmail}>
          {formData.email}
        </div>
      </section>
      <div
        className={`${isDarkMode ? "button-dark" : "button-light"}`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Dark Mode Active" : "Light Mode Active"}
      </div>
    </main>
  );
}
