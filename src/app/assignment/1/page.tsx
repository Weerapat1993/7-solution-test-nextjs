"use client"
import { ListItem, ListTable } from '@/components/ListItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from './page.module.css'
import { useTodoList } from '@/modules/todo/hooks/useTodoList';
import { Item } from '@/modules/todo/@types/todo';

const products = require('@/data/product.json').map((item: any, key: number) => ({ ...item, _id: key + 1 }))

export default function Assignment1() {
  const {
    fruits,
    vegetables,
    keys,
    handleAddItem,
    handleDeleteItem,
  } = useTodoList()
  const filterProduct = (item: Item) => {
    let result = keys.reduce((prev, cur) => {
      const add = item._id === cur ? 1 : 0
      return prev + add
    }, 0)
    return result === 0
  }
  const productsFilter = products.filter(filterProduct)
  return (
    <main className={styles.main}>
      <Typography align='center' variant="h3" gutterBottom>
        Assignment 1
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ListItem list={productsFilter} onClick={handleAddItem} />
        </Grid>
        <Grid item xs={4}>
          <ListTable title='Fruit'>
            <ListItem list={fruits} onClick={handleDeleteItem} />
          </ListTable>
        </Grid>
        <Grid item xs={4}>
          <ListTable title='Vegetable'>
            <ListItem list={vegetables} onClick={handleDeleteItem} />
          </ListTable>
        </Grid>
      </Grid>
    </main>
  );
}
