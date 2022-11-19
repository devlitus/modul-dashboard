import { List } from './List'

export const Dashboard = ({className}) => {
  const list = [
    { id: 1, name: 'List 1' },
    { id: 2, name: 'List 2' },
    { id: 3, name: 'List 3' },
  ]
  return (
    <>
      <h1 className={className}>Dashboard</h1>
      <List list={list} />
    </>
  )
}