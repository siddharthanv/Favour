import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Card, Avatar, Divider, Typography, Button } from "@mui/material";
import { faker } from "@faker-js/faker";
// components
import SvgIconStyle from "./SvgIconStyle";
import Image from "./Image";
import { Link } from "react-router-dom";

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

// ----------------------------------------------------------------------

ServicePersonCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default function ServicePersonCard({ user }) {
  const { firstName, skillType, id } = user;
  const name = firstName;
  const position = skillType;
  const follower = Math.floor(Math.random() * 2) + 3;
  const following = Math.floor(Math.random() * 50) + 10;
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

      <Box sx={{ py: 1.5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
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

        <div>
          <Box display="flex" alignItems="center" sx={{ height: "100%" }} justifyContent="center">
            <Link to="/hire" style={{ textDecoration: "none" }}>
              <Button
                onClick={() => {
                  localStorage.setItem("currentId", id);
                }}
                variant="outlined"
                size="small"
                sx={{ color: "#000", borderColor: "#000" }}
              >
                Hire
              </Button>
            </Link>
          </Box>
        </div>
      </Box>
    </Card>
  );
}
