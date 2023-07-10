import React from 'react'

const Price = ({price}) => {
  return (
    <p className="car-description">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
  )
}

export default React.memo(Price)