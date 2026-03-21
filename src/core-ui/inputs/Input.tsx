import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
};

export default function Input<T extends FieldValues>({
  label,
  type = "text",
  register,
  name,
}: Props<T>) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-800 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />
    </div>
  );
}
