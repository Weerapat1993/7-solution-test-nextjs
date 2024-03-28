export type Item = {
    _id?: number
    type: string
    name: string
}

export type TodoList = {
    fruits: Item[]
    vegetables: Item[]
    keys: number[];
}