import { useState } from "react";

const Category = () => {
  const navItems = [
    {
      name: "Super Saver Deals",
      href: "/#SuperSaverDeals",
      id: "SuperSaverDeals",
    },
    {
      name: "Cricket Craze Deals",
      href: "/#CricketCrazeDeals",
      id: "CricketCrazeDeals",
    },
    { name: "Grap The Wraps", href: "/#GrapTheWraps", id: "GrapTheWraps" },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItem(id === selectedItem ? null : id);
  };
  return (
    <nav className="sticky top-10 z-30 bg-white p-3 drop-shadow-2xl ">
      <ul className="list-none flex space-x-3 justify-center ">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className={`p-2 ${
              item.id === selectedItem ? "border-b-4" : ""
            } hover:border-b-4 hover:border-black font-bold`}
            onClick={() => handleItemClick(item.id)}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Category;