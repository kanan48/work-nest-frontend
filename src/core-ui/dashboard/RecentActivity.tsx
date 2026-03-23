export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3 text-gray-700 dark:text-white">
        Recent Activity
      </h2>

      <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
        <li>1.Rahul moved task &quot;UI Fix&quot; to Done</li>
        <li>2.Anjali created new task &quot;Login API&quot;</li>
        <li>3.You updated project &quot;WorkNest&quot;</li>
      </ul>
    </div>
  );
}
