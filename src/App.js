import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Router from './Router';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';




const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles >
        <NotificationsProvider position="top-right" zIndex={2077}>
        <ModalsProvider>
          <Router />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  )
  
};

export default App;