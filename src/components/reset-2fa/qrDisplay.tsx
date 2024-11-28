import { Box, Typography } from '@mui/material';
import React from 'react'
import CustomButton from '../common/Button';

interface QrDisplayProps {
  onNext: () => void;
}

const QrDisplay = ({onNext}: QrDisplayProps) => {
  return (
    <>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				textAlign: "center",
				textWrap: "nowrap",
			}}
		>
      <Typography>認証アプリで QR コードを読み取ってください。</Typography>
    			<Box
				sx={{
					margin: "0 auto",
					width: "200px",
					height: "200px",
					backgroundColor: "#FAFAFB",
				}}
			>
				{/* QRコードを表示する領域 */}
			</Box>
      <CustomButton label="次へ" onClick={onNext}/>
    </Box>
    </>
  )
}

export default QrDisplay