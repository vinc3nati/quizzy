function QuizSkeleton() {
  return (
    <div className="max-w-[500px] w-full rounded p-4 shadow-md">
      <div className="animate-pulse space-y-4">
        {/* Title Skeleton */}
        <div className="h-8 w-full bg-gray-300 rounded"></div>

        {/* Questions Skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-full bg-gray-300 rounded"></div>
          <div className="h-6 w-full bg-gray-300 rounded"></div>
          <div className="h-6 w-full bg-gray-300 rounded"></div>
        </div>

        {/* Submit Button Skeleton */}
        <div className="flex justify-between">
          <div className="h-8 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-8 w-1/4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default QuizSkeleton;
