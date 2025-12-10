import React from 'react';
import { Grid, Typography } from '@mui/material';

import Layout from '../../Reusable/Layout';
import ErrorBox from '../../Reusable/ErrorBox';

import TodayForecastChart from './TodayForecastChart';

const DailyForecast = ({ data, forecastList }) => {
  const noData =
    !data ||
    !forecastList ||
    Object.keys(data).length === 0 ||
    data.cod === '404' ||
    forecastList.cod === '404';

  const subHeader = !noData && forecastList.length > 0 && (
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontSize: { xs: '10px', sm: '12px' },
        textAlign: 'center',
        lineHeight: 1,
        color: '#e00404ff',
        fontFamily: 'Roboto Condensed',
        marginBottom: '1rem',
      }}
    >
      {forecastList.length === 1
        ? '1 available forecast hour'
        : `${forecastList.length} available forecast hours`}
    </Typography>
  );

  if (noData) {
    return (
      <Layout
        title="TODAY'S FORECAST"
        content={<ErrorBox flex="1" type="error" />}
        sectionSubHeader={subHeader}
      />
    );
  }

  return (
    <Layout
      title="TODAY'S FORECAST"
      sectionSubHeader={subHeader}
      sx={{ marginTop: '2.9rem' }}
      mb="0.3rem"
      content={
        <Grid
          item
          xs={12}
          sx={{
            height: 300,
            width: '100%',
            marginTop: '1rem',
          }}
        >
          <TodayForecastChart
            forecastList={forecastList}
            showActualTemperature={true}
          />
        </Grid>
      }
    />
  );
};

export default DailyForecast;


