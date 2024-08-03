import React from 'react'

interface SeparatorProps {
 
    targetNumber?: string;
    targetDescription?: string;
  }


const Separator: React.FC<SeparatorProps> = ({
  
    targetNumber,
    targetDescription,
  }) => {

  
  return (
    <div className="flex flex-col gap-4 w-full mt-4">
 
    <div className="border-b border-[1px] border-blue-500 w-full"></div>
    <div>
      <p className="font-bold">
        {targetNumber  }
        {", "}
        <span className="font-normal">{targetDescription}</span>
      </p>
    </div>
  </div>
  )
}

export default Separator