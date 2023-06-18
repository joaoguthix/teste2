import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondVehicleThumb } from ".";

describe("<SecondVehicleThumb />", () => {
  it("should render without errors", () => {
    const { container } = render(<SecondVehicleThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly 'license' value", async () => {
    const { getByLabelText } = render(<SecondVehicleThumb />);

    const input = getByLabelText(/licença/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "abc-123" } });

    await waitFor(() => {
      expect(input.value).toBe("abc-123");
    });
  });

  it("should apply correctly 'model' value", async () => {
    const { getByLabelText } = render(<SecondVehicleThumb />);

    const input = getByLabelText(/modelo/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Fusca" } });

    await waitFor(() => {
      expect(input.value).toBe("Fusca");
    });
  });

  it("should apply correctly 'year Manufacture' value", async () => {
    const { getByLabelText } = render(<SecondVehicleThumb />);

    const input = getByLabelText(/fabricado/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1984" } });

    await waitFor(() => {
      expect(input.value).toBe("1984");
    });
  });
});