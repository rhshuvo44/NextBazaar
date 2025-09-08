const FilterSizes = () => {
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-4 text-2xl border-b-2 border-accent">Sizes</h3>
      <div className="space-y-2 grid grid-cols- md:grid-cols-3  gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            className="btn rounded-md btn-sm w-full justify-center"
          >
            <span className="label-text">{s}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSizes;
