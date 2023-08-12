import React from 'react';

interface OptionProps {
  text: string;
}

const Option: React.FC<OptionProps> = ({ text }: OptionProps) => {
  return (
    <div className='rounded-xl border-2 border-gray-600 p-3 w-10'> 
      {text}
    </div>
  );
}

export default Option;