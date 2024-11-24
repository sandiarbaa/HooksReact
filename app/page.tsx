"use client";
import { useFormData } from "./context/formData";

export default function Home() {
  const { formData, setFormData } = useFormData(); // memanggil dengan customHooks
  // console.log(formData);

  // Ketika memperbarui state berbentuk objek, Anda harus menggunakan spread operator untuk menyebarkan nilai sebelumnya dan mengganti hanya properti yang ingin diubah.
  const handleClickButton = () => {
    setFormData((prev) => ({
      ...prev, // Menyalin properti sebelumnya
      name: "Budiono", // Memperbarui properti name
    }));
  };

  const handleClickButtonEmail = () => {
    setFormData((prev) => ({
      ...prev,
      email: "budiono@gmail.com", // Memperbarui properti email
    }));
  };

  return (
    <div className="p-5">
      <div className="button" onClick={handleClickButton}>
        {formData.name}
      </div>
      <div className="button-email" onClick={handleClickButtonEmail}>
        {formData.email}
      </div>
    </div>
  );
}
