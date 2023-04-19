import { render, screen } from "@testing-library/react";

import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
import "@testing-library/jest-dom";

//import the components
import Home from "../pages/index";
import NavBar from "@/components/shared/NavMenu";
import Footer from "@/components/shared/Footer";
import Header from "@/components/homePage/Header";
import HowItWorks from "@/components/homePage/HowItWorks";
import HowHelp from "@/components/homePage/HowHelp";
import Contact from "@/components/homePage/Contact";

describe("Home", () => {
  it("renders the page components", () => {
    useRouter.mockReturnValue({ query: {} });
    render(<Home />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("how-it-works")).toBeInTheDocument();
    expect(screen.getByTestId("how-help")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
