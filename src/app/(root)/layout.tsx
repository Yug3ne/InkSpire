import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="px-4 md:px-8 lg:px-16 xl:xp-32 flex gap-4 flex-col">
      <Navbar />

      <section className="mb-10">{children}</section>
    </main>
  );
};

export default MainLayout;
