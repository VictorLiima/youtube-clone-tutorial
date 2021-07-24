import React from 'react';
import { Button } from '@material-ui/core';

import Layout from '../components/Layout/Index'

export default function Home() {
  return (
    <Layout title="YouTube">
      Clone youtube
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </Layout>
  );
}
