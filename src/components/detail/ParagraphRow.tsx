import React from 'react';
import TitleText from '../common/TitleText';
import Text from '../common/Text';
interface ParagraphRowProps {
    title : string;
    desc : string;
    txtColor: string;
}

const ParagraphRow :React.FC<ParagraphRowProps>  = ({title, desc, txtColor}) => {
  return (
    <div className='lg:max-w-2xl max-w-xs w-full h-auto lg:p-5 p-0 grid lg:grid-cols-2 grid-cols-1 mx-auto mb-0'>
      <TitleText title={title} txtColor={txtColor} />
      <Text desc={desc} className='mt-0'/>
    </div>
  );
};

export default ParagraphRow;