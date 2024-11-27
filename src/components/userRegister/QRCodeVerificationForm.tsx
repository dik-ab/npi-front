import type React from "react";
import { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Input } from "@mui/material";
import CustomButton from "../common/Button";

const QRCodeVerificationForm: React.FC = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""))
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const updatedCode = [...code];
      updatedCode[index] = value; // 現在のインデックスの値を更新
      setCode(updatedCode);
    }
    if (value.length === 1 && inputsRef.current[index + 1]) {
      // 次のフィールドにフォーカスを移動
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "center", textWrap: 'nowrap' }}>
      <Typography>① 認証アプリで QR コードを読み取ってください。</Typography>
      <Box sx={{ margin: "0 auto", width: "200px", height: "200px", backgroundColor: "#FAFAFB" }}>
        {/* QRコードを表示する領域 */}
      </Box>
      <Typography>② 表示された 6 桁のコードを入力してください。</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
 {[...Array(6)].map((_, index) => (
        <Input
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
            inputRef={(el) => {
    if (el) {
      inputsRef.current[index] = el; // Explicit assignment
    }
  }}
      inputProps={{
        maxLength: 1,
        style: {
          textAlign: "center",
        },
      }}
          onChange={(e) => handleInputChange(e, index)}
          sx={{
            width: "40px",
            height: "60px",
            textAlign: "center",
            alignItems: "center",
            backgroundColor: "#FAFAFB",
            border: "none",
          }}
        />
      ))}
      </Box>
      <CustomButton label="完了" variant="contained" disabled={code.some((char) => char === "")}>
        完了
      </CustomButton>
    </Box>
  );
};

export default QRCodeVerificationForm;
