import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const UnknownForecastItem = ({ day }) => {
  return (
    <>

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: { xs: '12px', sm: '20px', md: '32px' },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: { xs: '400', sm: '600' },
            fontSize: { xs: '12px', sm: '13px', md: '14px' },
            color: 'white',
            lineHeight: 1,
            height: '31px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {day}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '31px',
          }}
        >
          <HelpOutlineIcon
            sx={{
              width: { xs: '24px', sm: '28px', md: '31px' },
              height: 'auto',
              color: 'rgba(255,255,255,.7)',
              marginRight: '4px',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '12px', md: '14px' },
              color: 'rgba(255,255,255,.7)',
              lineHeight: 1,
              fontFamily: 'Roboto Condensed',
            }}
          >
            No data
          </Typography>
        </Box>
      </Grid>


      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255,255,255,.3)',
            fontSize: { xs: '11px', sm: '12px' },
            height: '31px',
          }}
        >
          –
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,.3)',
            fontSize: { xs: '11px', sm: '12px' },
            height: '31px',
          }}
        >
          –
        </Typography>
      </Grid>

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255,255,255,.3)',
            fontSize: { xs: '11px', sm: '12px' },
            height: '31px',
          }}
        >
          –
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,.3)',
            fontSize: { xs: '11px', sm: '12px' },
            height: '31px',
          }}
        >
          –
        </Typography>
      </Grid>
    </>
  );
};

export default UnknownForecastItem;