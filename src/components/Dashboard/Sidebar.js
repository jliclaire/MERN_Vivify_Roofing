import React from 'react';

const Sidebar = (props) => {
  const { data } = props;
  return (
    <>
      <h1>Hello world</h1>
      <p>There are {data.length} leads to be sold.</p>
    </>
  )
}

export default Sidebar