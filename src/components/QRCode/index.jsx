import { Cell, Grid, ScannerLight } from "./styles";

const qrPattern = [
  1, 1, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 0, 1, 0,
  1, 1, 1, 0, 1, 1, 1,
  0, 0, 0, 1, 0, 0, 1,
  1, 1, 0, 1, 1, 0, 0,
  0, 1, 1, 0, 1, 1, 0,
  1, 0, 1, 1, 0, 1, 1,
];

function QRCode() {
  return (
    <Grid>
      {qrPattern.map((active, index) => (
        <Cell
          key={index}
          $active={Boolean(active)}
          $delay={index * 18}
        />
      ))}

      <ScannerLight />
    </Grid>
  );
}

export default QRCode;