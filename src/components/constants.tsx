import { __InputStylesNames, CSSProperties } from "@mantine/core";

export const TEXTINPUT_STYLES: Partial<
  Record<__InputStylesNames, CSSProperties>
> = {
  root: {
    display: "flex",
    // flexDirection: "column",
    gap: "8px",
  },
  label: {
    display: "flex",
    gap: "4px",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "22.4px",
    color: "#2B2930",
  },
  input: {
    height: "40px",
    borderRadius: "8px",
    // border: "1px solid #DAD9DA",
  },
};
