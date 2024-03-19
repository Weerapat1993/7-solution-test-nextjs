import * as React from 'react';
import Box from '@mui/material/Box';

type Props = {
	list: any[]
  onClick: (item: any) => void
}

export default function ListItem({ list, onClick }: Props) {
  return (
    <div>
      {list.map(item => (
        <Box key={item._id} onClick={() => onClick(item)} component="section" sx={{ m: 2, p: 2, border: '1px solid grey', color: 'white', cursor: 'pointer' }}>
          {item.name}
        </Box>
      ))}
    </div>
    
  );
}