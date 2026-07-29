export default function WishlistLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-16">
      <div className="animate-pulse grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1600px] px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-square bg-base-300 rounded-xl" />
            <div className="h-4 bg-base-300 rounded w-2/3" />
            <div className="h-3 bg-base-300 rounded w-1/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
