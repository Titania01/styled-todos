import { entity, persistence } from 'simpler-state'
import { displayingTypes, idTypes, ITodo } from '../types'
import { generateId } from '../utils'


interface ITodoEntity {
  displaying: displayingTypes;
  items: ITodo[]
}

const defaultState: ITodoEntity = {
  displaying: "all",
  items: [
    { id: 1, text: "Learn Typescript", done: true},
    { id: 2, text: "Learn React", done: true},
    { id: 3, text: "Learn Styled Components", done: true},
    { id: 4, text: "Learn Tailwind", done: false},
    { id: 5, text: "Learn GraphQL", done: false},
  ]
}

export const todoEntity = entity(defaultState, [persistence("styled-todos")])

// actions
export const addTodo =(text: string) => todoEntity.set((state) => ({
  ...state,
  items: state.items.concat({ text, done: false, id: generateId()})
}))

export const deleteTodo = (id:idTypes) => todoEntity.set((state) => ({
  ...state,
  items: state.items.filter((item) => item.id !== id)
}))

export const toggleTodo = (id: idTypes) => todoEntity.set((state) => ({
  ...state,
  items: state.items.map((item) => {
    if(item.id === id) item.done = !item.done
    return item
  })
}))
 
export const clearCompleted =() => todoEntity.set((state) => ({
  ...state,
  items: state.items.filter((item) => !item.done)
}))

export const setDisplaying =(value: displayingTypes) => todoEntity.set((state) => ({
  ...state,
  displaying: value
}))

export const toggleTouch = () => todoEntity.set((state) => {
  let itemsUpdate:any[]
  const selected = state.items.filter(item => item.done)
  itemsUpdate = state.items.map(item => {
    if(selected.length) {
      if(selected.length === state.items.length) item.done = false
      else{item.done =true}
    }
    else{item.done = true}

    return item
  })
  return ({
    ...state,
    items: itemsUpdate
  })

})