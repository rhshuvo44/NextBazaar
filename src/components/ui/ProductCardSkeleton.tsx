const ProductCardSkeleton = () => {
  return (
    <div className="bg-base-100 shadow-soft relative rounded-xl overflow-hidden skeleton-shimmer text-base-200">
      {/* Wishlist Icon */}
      <div className="bg-base-300 absolute top-3 right-3 rounded-full p-3" />

      {/* Image */}
      <div className="h-48 w-full bg-base-300" />

      {/* Content */}
      <div className="p-3 mt-2 space-y-2">
        <div className="flex justify-between items-center">
          {/* Title */}
          <div className="h-4 bg-base-300 rounded w-1/2" />
          {/* Price */}
          <div className="h-5 bg-base-300 rounded w-12" />
        </div>
        {/* Brand */}
        <div className="h-3 bg-base-200 rounded w-1/3" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;