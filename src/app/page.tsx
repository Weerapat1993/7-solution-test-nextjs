import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography align='center' variant="h3" gutterBottom>
        Assignment
      </Typography>
      <CardContent>
        <Box sx={{ m: 2 }}>
          <Link href="/assignment/1">
            <Button variant="contained">Assignment 1</Button>
          </Link>
        </Box>
        <Box sx={{ m: 2 }}>
          <Link href="/assignment/2">
            <Button variant="contained">Assignment 2</Button>
          </Link>
        </Box>
      </CardContent>
    </main>
  );
}
