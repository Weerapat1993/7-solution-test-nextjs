"use client"
import { useState } from 'react'
import { ListItem, ListTable } from '@/components/ListItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from './page.module.css'

const products = require('@/data/product.json').map((item: any, key: number) => ({ ...item, _id: key + 1 }))

type Item = {
  _id?: number
  type: string
  name: string
}

export default function Home() {
  const [fruits, setFruit] = useState([])
  const [vegetables, setVegetable] = useState([])
  const [keys, setKey] = useState([])
  const productsFilter = products.filter((item: Item) => {
    let result = keys.reduce((prev, cur) => {
      if(item._id === cur) {
        return prev + 1
      } else {
        return prev + 0
      }
    }, 0)
    return result === 0
  })
  const handleAddItem = (item: Item) => {
    switch(item.type) {
      case 'Fruit':
        setFruit(fruits.concat([item]))
        setKey(keys.concat(item._id))
        break
      case 'Vegetable':
        setVegetable(vegetables.concat([item]))
        setKey(keys.concat(item._id))
        break
    }
  }
  const handleDeleteItem = (item: Item) => {
    switch(item.type) {
      case 'Fruit':
        setFruit(fruits.filter(cart => cart._id !== item._id))
        setKey(keys.filter(key => key !== item._id))
        break
      case 'Vegetable':
        setVegetable(vegetables.filter(cart => cart._id !== item._id))
        setKey(keys.filter(key => key !== item._id))
        break
    }
  }
  return (
    <main className={styles.main}>
      <Typography align='center' variant="h3" gutterBottom>
        Product List
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
