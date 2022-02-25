import React from "react";
import photo from "../images/photo.PNG";
import nepal from "../images/nepal.PNG";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "black",
  border: "white",
}));

function Header() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
            <img src={photo} alt="alt" />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div className="headers text-center">
              <p>Government of Nepal</p>
              <p>Ministry of Forests and Environment</p>
              <h5>Department of Forests and Soil Conservation</h5>
              <p>Landslide and Watershed Management Division</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src={nepal} alt="alt" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
