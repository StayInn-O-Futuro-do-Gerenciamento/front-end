import { iInputProps } from "./type";
import { StyledInput } from "./style";

export const Input = ({
  type,
  placeholder,
  label,
  register,
  defaultValue,
  disable,
  className,
  onChange,
  onInput,
  min,
  max,
}: iInputProps) => {
  return (
    <StyledInput>
      <label>
        <strong>{label}</strong>
      </label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        onInput={onInput}
        disabled={disable}
        {...register}
        min={min}
        max={max}
      />
    </StyledInput>
  );
};
