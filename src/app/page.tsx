'use server';

import React from 'react';
import { Menu } from '@/components/Menu/Menu.component';
import { Wordpress } from '@/services/Wordpress.service';
import { Spinner } from '@/ui/Spinner/Spinner.component';

export default async function Home() {
  const { data } = await Wordpress.getMenu();

  if (data)
    return (
      <Menu menu={data} />
    );
  else return <Spinner />;
}