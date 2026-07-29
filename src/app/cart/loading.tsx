export default function CartLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-16">
      <div className="animate-pulse space-y-6 w-full max-w-4xl px-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <div className="w-24 h-24 bg-base-300 rounded-xl" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-base-300 rounded w-1/3" />
              <div className="h-3 bg-base-300 rounded w-1/4" />
              <div className="h-3 bg-base-300 rounded w-1/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
