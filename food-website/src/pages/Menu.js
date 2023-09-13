import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from '../data/data.js'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "360px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{ height: '400px' }} component={'img'} src={menu.image} alt={menu.name} />

              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>{menu.name}(
                  {/* Rs. */}
                  <CurrencyRupeeIcon sx={{marginBottom:"-5px"}}/>
                {menu.price}) </Typography>
                <Typography variant="body2" gutterBottom component={'div'}>{menu.description} </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
