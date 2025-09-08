const Tabs = ({ category }: { category: string }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">{category} Clothing</h2>
      <div className="tabs tabs-boxed space-x-2">
        <a className="tab tab-active">New</a>
        <a className="tab">Recommended</a>
      </div>
    </div>
  );
};

export default Tabs;
