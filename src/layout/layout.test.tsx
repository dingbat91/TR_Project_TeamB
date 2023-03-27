import { render, screen } from "@testing-library/react";
import { Layout } from "./layout";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders Layout component correctly", () => {
  render(<Layout />);
  const layoutComponent = screen.getByLabelText("search");
  expect(layoutComponent).toBeInTheDocument();
});
