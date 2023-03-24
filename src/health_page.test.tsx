import { fireEvent, queryAllByAttribute, render, screen } from "@testing-library/react";
import { App } from "./App";
import { MovieData } from "./card/movie_card";
import Dropdown from "./components/Dropdown/Dropdown";
import Search from "./components/Search/search";
import { SearchProps } from "./components/Search/type";
import { MovieCardInterface } from "./card/movie_card";
import Card from "./components/card/card";
import { CardProps } from "./components/card/card";
import { MovieDetails } from "./types/movie";

//// test Dropdown component
const onchangeHandler = jest.fn();
const dropdownOptions = [
  {
    id: 0,
    name: "first",
  },
  {
    id: 1,
    name: "second",
  },
  {
    id: 2,
    name: "third",
  },
];

test("renders select element correctly with labelText for Dropdown", () => {
  render(
    <Dropdown
      name="select-name"
      value=""
      onChangeHandler={onchangeHandler}
      labelText="this is selectBox"
      options={[]}
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  const labelSelectElement = screen.getByText(/this is selectBox/i);
  expect(labelSelectElement).toBeInTheDocument();
  expect(DropdownComponentElement).toBeInTheDocument();
});

test("renders first value correctly and disabled when passed selectText as props for DropDown", () => {
  render(
    <Dropdown
      value=""
      selectText={"select option"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      options={dropdownOptions}
      labelText=""
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);

  expect(DropdownComponentElement).toHaveValue("");
  expect(screen.getByText("select option")).toBeDisabled();
});

test("renders select default value correctly when pass as props for DropDown", () => {
  render(
    <Dropdown
      value={"2"}
      options={dropdownOptions}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  expect(DropdownComponentElement).toHaveValue("2");
});

test("renders select value correctly on onchange handler for DropDown", () => {
  render(
    <Dropdown
      options={dropdownOptions}
      value={"0"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText=""
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "2" } });
  expect(selectInputElement).toHaveValue("2");
});

//// test search component
test("renders search component and the input box is existing", () => {
    const searchProps: SearchProps = {
        value: "Testing",
        onChangeHandler: () => {},
        onKeyDownHandler: () => {},
    }
    render (<Search {...searchProps} />);

    //check if the input box is existing
    const inputText = screen.getAllByRole('textbox').find((tb) => tb.id === 'search');
    expect (inputText).toBeInTheDocument();
});

it("renders search component", async () => {
    const searchProps: SearchProps = {
        value: "",
        onChangeHandler: jest.fn,
        onKeyDownHandler: () => {},
    }
    render (<Search {...searchProps} />);

    //check if the change event is working
    const inputText = screen.getAllByRole('textbox').find((tb) => tb.id === 'search');
    
    if (inputText)
        fireEvent.change(inputText, { target: { value: "2" } });

    expect (inputText).toHaveValue('2');
});

test("renders search component and the input box is existing while rendering from <App>", () => {
    render (<App />);

    //check if the input box is existing
    const inputText = screen.getAllByRole('textbox').find((tb) => tb.id === 'search');
    expect (inputText).toBeInTheDocument();
});


//// test movie_card component
test("renders movie_card component", () => {
    const movieCardProps: MovieCardInterface = {
        movieid: 550,
    }
    render (<MovieData {...movieCardProps} />);

    //check if the image object is existing
    const img = screen.getAllByRole('img')[0];
    expect (img).toBeInTheDocument();
});

//// test card component
test("renders card component", () => {
  const movieDetails: CardProps = {
    movieDetails: {poster_path:"pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", original_title: "Fight Club", release_date:new Date()
    , overview:"A ticking-time-bomb insomniac ...", id:550,
    adult:false, backdrop_path:"", belongs_to_collection:{}, budget:0, genres:[], homepage:"", imdb_id:"", original_language:""
    , popularity:0, production_companies:[], production_countries:[], spoken_languages:[]}
  }
  render (<Card {...movieDetails} />);

  const testImage = screen.getAllByRole('img')[0] as HTMLImageElement;
  expect(testImage.alt).toContain("Fight Club movie poster");

  const title = screen.getByText(/Fight Club/);
  expect(title).toBeInTheDocument();

  const overview = screen.getByText(/ticking-time-bomb/);
  expect(overview).toBeInTheDocument();

  const id = screen.getByText(/550/);
  expect(id).toBeInTheDocument();

});
