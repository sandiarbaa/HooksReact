"use client";
import { useAppState } from "./context/state";
import MainLayouts from "./layouts/MainLayouts";

export default function Home() {
  const { isDarkMode } = useAppState();
  return (
    <MainLayouts>
      <h1 className={`${isDarkMode ? "title-dark" : "title-light"}`}>
        Home Page
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
        similique eius, doloremque beatae voluptas repudiandae perspiciatis vel
        reiciendis. Porro rem quasi reiciendis, architecto veniam tempora id?
        Corporis aut, nihil quasi cumque delectus atque mollitia aliquid nulla
        quas nisi aspernatur sunt hic autem in blanditiis explicabo suscipit,
        debitis quisquam expedita a?
      </p>
    </MainLayouts>
  );
}
