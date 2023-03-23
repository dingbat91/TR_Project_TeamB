export interface SearchProps {
  value: string;
  onKeyDownHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeHandler: (value: string) => void;
}
