import clsx from "clsx";
import Link from "next/link";

export const MenuFilter = ({ filters, currentFilter }) => {
  return (
    <aside className="flex w-full lg:w-1/3 flex-wrap gap-4 lg:max-[200px] lg:flex-col">
      <MenuItem isActive={!currentFilter} filter="" key="filter">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem
          isActive={filter === currentFilter}
          filter={filter}
          key="filter"
        >
          {filter}
        </MenuItem>
      ))}
    </aside>
  );
};

const MenuItem = ({ filter, children, isActive }) => {
  return (
    <Link
      href={`/?filter=${filter}`}
      key={filter}
      className={clsx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        { "font-bold": isActive }
      )}
    >
      {children}
    </Link>
  );
};
