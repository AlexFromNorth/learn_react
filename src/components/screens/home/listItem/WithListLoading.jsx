import React from 'react';

function WithListLoading(Component) {
  // return function WihLoadingComponent({ isLoading, ...props }) {
    // console.log({ ...props })
  return function WihLoadingComponent({ ...props }) {
    // if (!isLoading) return <Component {...props} />;
    // return (
    //   <p style={{ textAlign: 'center', fontSize: '30px' }}>
    //     Hold on, fetching data may take some time :)
    //   </p>
    // );
    return <Component {...props} />;
  };
}
export default WithListLoading;