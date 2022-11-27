import './Header.css'
export const Header = ({ children, className }) => {
  const style = className ? `header ${className}` : 'header'
  return (
    <header className={style}>{ children }</header>
  )
}
