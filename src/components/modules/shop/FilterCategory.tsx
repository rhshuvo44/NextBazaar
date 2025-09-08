import Link from "next/link";

const FilterCategory = () => {
  const categories = [
    {
      name: "Tops",
      subcategories: ["Casual Tops", "Formal Tops", "Crop Tops"],
    },
    {
      name: "Printed T-shirts",
      subcategories: ["Graphic Tees", "Slogan Tees", "Oversized Tees"],
    },
    {
      name: "Kurtis",
      subcategories: ["Anarkali", "Straight Kurti", "A-line Kurti"],
    },
    {
      name: "Boxers",
      subcategories: ["Cotton Boxers", "Printed Boxers", "Plain Boxers"],
    },
  ];

  return (
    <div className="mb-6">
      <ul className="menu rounded-box w-56">
        {categories.map((c, i) => (
          <li key={i}>
            <details>
              <summary>{c.name}</summary>
              <ul>
                {c.subcategories.map((sub, j) => (
                  <li key={j}>
                    <Link href="/">{sub}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
