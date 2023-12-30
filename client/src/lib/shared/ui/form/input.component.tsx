import { ErrorMessage, Field } from "formik";

interface IPorps {
  name: string;
  type: "text" | "password";
  label: string;
  placeholder: string;
}

export const InputComponent = ({ name, type, label, placeholder }: IPorps) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ErrorMessage
        name={name}
        render={(msg: string) => (
          <p className="text-[12px] text-red-600 mb-2">{msg}</p>
        )}
      />
    </div>
  );
};
