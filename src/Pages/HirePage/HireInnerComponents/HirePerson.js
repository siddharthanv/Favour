// @mui
import { styled } from "@mui/material/styles";
import { Box, Card, Avatar, Divider, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
// components
import SvgIconStyle from "../../ServicePersons/ServicePersonComponents/SvgIconStyle";
import Image from "../../ServicePersons/ServicePersonComponents/Image";

// ----------------------------------------------------------------------

const OverlayStyle = styled("div")(({ theme }) => ({
  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  top: 0,
  zIndex: 8,
  content: "''",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

export default function HirePerson({ ser }) {
  const { firstName, skillType, id } = ser;
  const name = firstName;
  const position = skillType;
  const follower = "5";
  const following = "12";
  const cover = faker.internet.avatar();
  const avatarUrl = faker.internet.avatar();

  return (
    <Card sx={{ textAlign: "center" }}>
      <Box sx={{ position: "relative" }}>
        <SvgIconStyle
          src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            left: 0,
            right: 0,
            bottom: -26,
            mx: "auto",
            position: "absolute",
            color: "background.paper",
          }}
        />
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: "auto",
            position: "absolute",
          }}
        />
        <OverlayStyle />
        <Image src={cover} alt={cover} ratio="21/9" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary", pb: "20px" }}>
        {position}
      </Typography>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Box sx={{ py: 1.5, display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.35, color: "text.disabled" }}>
            Rating
          </Typography>
          <Typography variant="subtitle1">{follower}</Typography>
        </div>

        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.35, color: "text.disabled" }}>
            Jobs Completed
          </Typography>
          <Typography variant="subtitle1">{following}</Typography>
        </div>
      </Box>
    </Card>
  );
}
