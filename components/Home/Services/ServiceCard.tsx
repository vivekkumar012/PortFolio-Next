import React from 'react'


type Props = {
    icon: string;
    name: string;
    description: string;
}

const ServiceCard = ({description, icon, name}: Props) => {
  return (
    <div>
      <img src={icon} alt="img" width={60} height={60} />
      <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200'>{name}</h1>
      <p className='text-gray-300 mt-6'>{description}</p>
    </div>
  )
}

export default ServiceCard
