type Props = {
  title: string;
  value: string;
};

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        {value}
      </h2>
    </div>
  );
}
