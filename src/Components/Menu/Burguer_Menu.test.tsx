import React from "react";
import { render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BurguerMenu from "./Burguer_Menu";

test("renders BurguerMenu component", () => {
  render(
    <BrowserRouter>
      <BurguerMenu />
    </BrowserRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Tabla de Posiciones")).toBeInTheDocument();
  expect(screen.getByText("Equipos")).toBeInTheDocument();
  expect(screen.getByText("Jugadores")).toBeInTheDocument();
});
