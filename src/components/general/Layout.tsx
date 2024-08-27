import { Header } from "..";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
