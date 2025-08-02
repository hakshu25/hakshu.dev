export const PostSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* パラグラフ行のスケルトン */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      {/* コードブロックのスケルトン */}
      <div className="bg-gray-100 rounded-lg p-4 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>

      {/* 複数パラグラフのスケルトン */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* 見出しとパラグラフのスケルトン */}
      <div className="space-y-3">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>

      {/* リストのスケルトン */}
      <div className="space-y-2 ml-4">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};
