import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setFruit, setKey, setVegetable } from '@/redux/slices/todoSlice'
import { Item } from "../@types/todo";

export const useTodoList = () => {
    const dispatch = useAppDispatch();
    const fruits = useAppSelector((state) => state.todoReducer.fruits);
    const vegetables = useAppSelector((state) => state.todoReducer.vegetables);
    const keys = useAppSelector((state) => state.todoReducer.keys);

    const handleAddItem = (item: Item) => {
        switch(item.type) {
          case 'Fruit':
            dispatch(setFruit(fruits.concat([item])))
            dispatch(setKey(keys.concat(item._id)))
            break
          case 'Vegetable':
            dispatch(setVegetable(vegetables.concat([item])))
            dispatch(setKey(keys.concat(item._id)))
            break
        }
      }
      const handleDeleteItem = (item: Item) => {
        switch(item.type) {
          case 'Fruit':
            dispatch(setFruit(fruits.filter(cart => cart._id !== item._id)))
            dispatch(setKey(keys.filter(key => key !== item._id)))
            break
          case 'Vegetable':
            dispatch(setVegetable(vegetables.filter(cart => cart._id !== item._id)))
            dispatch(setKey(keys.filter(key => key !== item._id)))
            break
        }
      }

    return {
        fruits,
        vegetables,
        keys,
        setFruit: (data: Item[]) => dispatch(setFruit(data)),
        setVegetable: (data: Item[]) => dispatch(setVegetable(data)),
        setKey: (data: number[]) => dispatch(setKey(data)),
        handleAddItem,
        handleDeleteItem,
    }
}