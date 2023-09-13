import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 2, textAlign: "center", p: 2,
        '& h4': { fontWeight: "bold", my: 2, fontSize: "2rem" },
        '& p': { textAlign: "justify" },
        '@media (max-width:600px)': {
          mt: 0,
          '& h4': { fontSize: "1.5rem" },
        }
      }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, neque assumenda. Excepturi pariatur, quos dolor inventore officia dolorem ad a est quasi iste facilis commodi distinctio rerum similique minus ipsa iure fugiat, consequatur neque rem. </p>
      </Box>
      <Box sx={{
        margin: "0 auto", width: "600px",
        '@media (max-width:600px)': {
          width: "300px"
        },
        mb:2
      }}>

        <TableContainer component={Paper}>
          <Table area-aria-label="contact label">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-000-000 ("tollfree")
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
