/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import BurguerMenu from "./Burguer_Menu";

describe("BurguerMenu component", () => {
  test("renders menu initially hidden", () => {
    const { getByTestId } = render(
      <Router>
        <BurguerMenu />
      </Router>
    );
    const menu = getByTestId("menu");
    expect(menu).toHaveClass("hidden");
  });

  test("clicking menu item toggles menu visibility", () => {
    const { getByTestId } = render(
      <Router>
        <BurguerMenu />
      </Router>
    );
    const burgerMenu = getByTestId("burger-menu");
    const menu = getByTestId("menu");

    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("visible");

    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("hidden");
  });

  test("clicking menu item closes menu", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <BurguerMenu />
      </Router>
    );
    const burgerMenu = getByTestId("burger-menu");
    const menu = getByTestId("menu");
    const homeLink = getByText("Home");

    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("visible");

    fireEvent.click(homeLink);
    expect(menu).toHaveClass("hidden");
  });

  test("clicking menu item closes menu and resets burger class", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <BurguerMenu />
      </Router>
    );
    const burgerMenu = getByTestId("burger-menu");
    const menu = getByTestId("menu");
    const homeLink = getByText("Home");

    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("visible");

    fireEvent.click(homeLink);
    expect(menu).toHaveClass("hidden");

    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("visible");
  });

  test("updateMenu toggles menu visibility and burger class", () => {
    const { getByTestId } = render(
      <Router>
        <BurguerMenu />
      </Router>
    );

    const burgerMenu = getByTestId("burger-menu");
    const menu = getByTestId("menu");


    expect(menu).toHaveClass("hidden");


    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("visible");


    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("hidden");
  });

  test("closeMenu closes menu and resets burger class", () => {
    const { getByTestId } = render(
      <Router>
        <BurguerMenu />
      </Router>
    );

    const burgerMenu = getByTestId("burger-menu");
    const menu = getByTestId("menu");


    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("visible");


    fireEvent.click(burgerMenu);
    expect(menu).toHaveClass("hidden");
  });
});
