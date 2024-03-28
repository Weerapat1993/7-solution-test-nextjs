import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

type Props = {
  title: string
	children: React.ReactNode
  onClick: any
}

export default function ListTable({ children, title, onClick }: Props) {
  return (
    <Card sx={{ m: 1, border: '1px solid gray', height: '100%', background: 'black' }}>
        <CardHeader
            title={title}
            sx={{ color: 'white', textAlign: 'center', fontSize: 14, background: 'gray', padding: 1 }}
        />
        <CardContent sx={{ p: 1, minHeight: '75vh' }} onClick={onClick}>
            {children}
        </CardContent>
    </Card>
  );
}