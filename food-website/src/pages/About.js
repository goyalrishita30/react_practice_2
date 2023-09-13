import { Box, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15, textAlign:"center"}}>
        <Typography variant="h4">
          Welcome to my restaurant!
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, neque assumenda. Excepturi pariatur, quos dolor inventore officia dolorem ad a est quasi iste facilis commodi distinctio rerum similique minus ipsa iure fugiat, consequatur neque rem. Error repudiandae quo veritatis ipsam cum culpa quos esse nostrum, aliquid minus reiciendis, autem fugiat suscipit dolorem! Animi delectus iure laborum enim maxime minima temporibus reprehenderit ad qui, voluptas eligendi nam sed exercitationem, sint aliquid odit ratione sit voluptatum, blanditiis natus fugiat officiis magnam? Dolor aspernatur reprehenderit voluptatibus rerum libero explicabo rem mollitia nulla accusamus corporis sit ea, laboriosam consequatur earum ducimus, nostrum dolorem in?</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aperiam, natus, ut ratione temporibus enim dicta aliquid iusto laboriosam ab adipisci quam eius et odit! Quod dignissimos nulla repudiandae assumenda.</p>
      </Box>
    </Layout>
  );
};

export default About;
