import React from  'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import SideMenu from './index';

afterEach(cleanup);



it("renders", () => {

  const user = {
    "name": "Andrew Sims",
    "suburb": "Mentone"
  }, {};

  
  const { getByText, } =render(<SideMenu currentUser={user} />);
  expect(getByText("VIVIFY")).toHaveClass("sidebar-logo");

})