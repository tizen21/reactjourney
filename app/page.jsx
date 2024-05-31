import Header from "../src/Header";
import Image from "next/image";
import { REACT_CARDS } from "@/src/react-cards";
import { MenuFilter } from "@/src/MenuFilter";
import { ReactCard } from "@/src/ReactCard";

export default function Home({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((c) => c.category))];
  const currentFilter = searchParams.filter;

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex py-2 flex-1 overflow-auto gap-4 max-lg:flex-col">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
        <div className="size-full overflow-auto">
        <div className="grid h-fit grid-cols-1  w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REACT_CARDS.filter(card => {
            if (!currentFilter) return true;
            return card.category === currentFilter
          }).map((card) => (
            <ReactCard hideCategory={currentFilter} card={card} key={card.name} />,
          ))}
        </div>
        </div>
      </div>
    </main>
  );
}
