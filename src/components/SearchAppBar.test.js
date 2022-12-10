import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";
import SearchAppBar from "./SearchAppBar";

//const onBuscar = jest.fn();
/* const renderBuscador = () => {
  const component = render(<SearchAppBar onBuscar={onBuscar}></SearchAppBar>);
  return component;
};
 */
describe("<SearchAppBar/>", () => {
    
  let component, onBuscar;
  beforeEach(() => {
    onBuscar = jest.fn();
    component = render(<SearchAppBar onBuscar={onBuscar}></SearchAppBar>);
  });

  test("it Should render component", () => {
    /* const component = renderBuscador(); */
    expect(component.container).toBeInTheDocument();
  });

  test("it Should not call onBuscar when the user clicks the button and the content is less than 3 characters", async () => {
    /* const component = renderBuscador(); */
    const button = component.getByRole("button");
    fireEvent.click(button);

    expect(onBuscar).not.toBeCalled();
  });

  test("it Should call onBuscar when the user clicks the button with the requerid parameter ", async () => {
    /* const component = renderBuscador(); */
    const input = component.getByRole("searchbox").querySelector("input");
    fireEvent.change(input, { target: { value: "argentina" } });

    const button = component.getByRole("button");
    fireEvent.click(button);

    expect(onBuscar).toBeCalled();
    
  });

  test("it Should not call onBuscar when the user press enter if the paramater is empty", async () => {
    /* const component = renderBuscador(); */
    const input = component.getByRole("searchbox").querySelector("input");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(onBuscar).not.toBeCalled();
    
  });
});

/* test('render content',()=>{
   
    const component = render(<SearchAppBar></SearchAppBar>)
    console.log(component)
}) */
