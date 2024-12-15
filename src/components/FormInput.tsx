import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends UseFormRegisterReturn {
  placeholder: string;
  label: string;
  errorMessage: FieldError | string;
}
const FormInput = ({
  placeholder,
  label,
  errorMessage,
  ...props
}: FormInputProps) => {
  return (
    <fieldset className="Fieldset">
      <label className="Label" htmlFor="productAmount">
        {label}
      </label>
      <input
        {...props}
        type="text"
        className={`Input ${errorMessage && `!border-red-500`}`}
        placeholder={placeholder}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs">{errorMessage as string}</p>
      )}
    </fieldset>
  );
};

export default FormInput;
