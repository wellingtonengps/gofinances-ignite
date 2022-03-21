import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";

import { Register } from ".";

const Providers: React.FC = ({ children }) => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </NavigationContainer>
);

describe("Register Screen", () => {
  it("should be open category modal when user click on the category button", async () => {
    const { getByTestId } = render(<Register />, { wrapper: Providers });

    const categoryModal = getByTestId("modal-category");
    const buttonCategory = getByTestId("button-category");
    fireEvent.press(buttonCategory);

    await waitFor(
      () => {
        expect(categoryModal.props.visible).toBeTruthy();
      },
      { timeout: 2000 }
    );
  });
});
