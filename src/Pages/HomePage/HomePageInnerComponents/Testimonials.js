import { Avatar, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import React from "react";
// Third party library - React Multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faker } from "@faker-js/faker";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    },
  };
  return (
    <div>
      <Container sx={{ pb: "50px" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: "20px", mb: "40px", textAlign: "center" }} gutterBottom>
          Testimonials
        </Typography>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
          itemClass="padding-left: 25px"
        >
          {[...new Array(5)].map((_test, index) => (
            <Card sx={{ mx: "10px", height: "98%" }} key={index}>
              <CardContent>
                <Stack direction="row" justifyContent="center">
                  <Avatar alt="Remy Sharp" src={faker.internet.avatar()} sx={{ width: 70, height: 70 }} />
                </Stack>
                <Typography variant="body1" sx={{ textAlign: "center", fontSize: "18px", fontWeight: 600, my: "15px" }}>
                  {faker.name.findName()}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center", my: "15px" }}>
                  {faker.lorem.sentence(25)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
