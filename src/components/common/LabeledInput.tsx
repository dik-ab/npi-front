import type React from "react";
import { Box, Typography, Input, IconButton } from "@mui/material";
import { Controller, type Path, type Control, type FieldValues } from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface LabelledInputProps<T extends FieldValues>  {
  control: Control<T>;
  name: Path<T>
  label: string;
  placeholder?: string;
  inputHeight?: string;
  fontSize?: string;
  errorMessage?: string;
  helperText?: string;
  password?: boolean
}

export const LabelledInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  inputHeight = "36px",
  fontSize = "16px",
  errorMessage,
  helperText,
  password = false,
}: LabelledInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", color: "#333", fontSize: "14px", marginBottom: "8px" }}
      >
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Input
              {...field}
              autoComplete="off"
              placeholder={placeholder}
              disableUnderline
              fullWidth
              type={password && !showPassword ? "password" : "text"}
              sx={{
                height: inputHeight,
                fontSize: fontSize,
                backgroundColor: "#FAFAFB",
                borderRadius: "8px",
                padding: "0 10px",
              }}
            />
            {password && (
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                sx={{
                  position: "absolute",
                  right: "10px",
                  color: "#666",
                }}
              >
                {showPassword ? <VisibilityOff fontSize="small"/> : <Visibility fontSize="small"/>}
              </IconButton>
            )}
          </Box>
        )}
      />
      {errorMessage ? (
        <Typography
          variant="body2"
          sx={{ color: "red", fontSize: "12px" }}
        >
          {errorMessage}
        </Typography>
      ) : (
        helperText && ( 
          <Typography
            variant="body2"
            sx={{ color: "#666", fontSize: "12px" }}
          >
            {helperText}
          </Typography>
        )
      )}
    </Box>
  );
};
