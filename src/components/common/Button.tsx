import type React from "react";
import { Button as MuiButton, CircularProgress } from "@mui/material";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/system";

interface CustomButtonProps extends MuiButtonProps {
  label?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  icon,
  loading = false,
  fullWidth = false,
  sx = {},
  ...props
}) => {
  return (
    <MuiButton
      fullWidth={fullWidth}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: icon ? "8px" : 0,
        padding: "10px 20px",
        backgroundColor: "#9DA8BB",
        color: 'black',
        "&:hover": {
          backgroundColor: "#9DA8BB",
        },
        ...sx,
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: "#fff" }} />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </MuiButton>
  );
};

export default CustomButton;
