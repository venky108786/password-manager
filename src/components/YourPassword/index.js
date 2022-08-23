import './index.css'

const YourPassword = props => {
  const {each} = props
  const {web, name, pws} = each
  return (
    <li className="li">
      <div>
        <p className="p">{web}</p>
        <p className="p">{name}</p>
        <p className="p">{pws}</p>
      </div>
      <button type="button" className="deleteButton">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}
export default YourPassword
