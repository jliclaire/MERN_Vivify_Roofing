import React from  'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Login from './index';

afterEach(cleanup);

it("renders", () => {
  const { getByText, } =render(<Login />);
  expect(getByText("VIVIFY")).toHaveClass("login-logo");
  expect(getByText("Log In")).toHaveClass('btn-text');
})
