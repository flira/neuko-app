import { JSX } from "preact";

interface ToggleProps {
  name: string;
  values: string[];
  currentValue: number;
}

function Toggle(
  { currentValue, name, values }: JSX.HTMLAttributes<HTMLElement> & ToggleProps,
) {
  const items = () =>
    values.map((value, i) => {
      const checked = currentValue === i;
      const id = `${btoa(name)}-${(i + 1)}`;
      return (
        <li key={id}>
          <input type="radio" checked={checked} id={id} />
          <label for={id}>{value}</label>
        </li>
      );
    });
  return (
    <>
      <ul>
        {items()}
      </ul>
    </>
  );
}
