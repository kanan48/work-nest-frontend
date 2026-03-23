type Props = {
  name: string;
};

export default function ProjectCard({ name }: Props) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md cursor-pointer">
      <h3 className="font-semibold text-gray-800 dark:text-white">{name}</h3>
      <p className="text-xs text-gray-500 mt-1">Click to view board</p>
    </div>
  );
}
