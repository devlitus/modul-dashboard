import './Header.css'
export const Header = ({ children, className }) => {
  const style = className === undefined ? 'header' : className
  return (
    <header className={style}>{ children }</header>
  )
}
