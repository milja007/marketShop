import Link from "next/link";

const LinkNavbar = () => {
  const subCat = [
    "subc1",
    "subc2",
    "subc3",
    "subc4",
    "subc5",
    "subc6",
    "subc7",
    "subc8",
    "subc9",
    "subc10",
  ];

  const categories = [
    "cat1",
    "cat2",
    "cat3",
    "cat4",
    "cat5",
    "cat6",
    "cat7",
    "cat8",
    "cat9",
    "cat10",
    "cat11",
  ];
  return (
    <nav className="bg-white border-b">
      <ul className="flex items-center ">
        {categories.map((cat) => (
          <li key={cat} className="relatiflve group">
            <button
              className="flex items-center  hover:text-green-700"
              aria-haspopup="true"
            >
              <span>{cat}</span>
              <svg /* chevron */ />
            </button>

            {/* Submenu */}
            <ul
              className="
                absolute left-0  mt-2 w-35 bg-white border
                rounded shadow-lg opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-opacity duration-200 z-50
              "
              role="menu"
            >
              {subCat.map((sub) => (
                <li key={sub} role="none">
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LinkNavbar;
