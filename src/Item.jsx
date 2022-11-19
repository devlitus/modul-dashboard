export const Item = ({ item }) => { 
  return (
    <div>
      {
        item.map((it) => (
          <ul key={it.id}>
            <li>{it.name}</li>
          </ul>
        ))
      }
    </div>
  )
}