import './index.css'

const YourPassword = props => {
  const {each, check, onDelete} = props
  const {id, web, name, pws} = each
  const onclickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="li">
      <div>
        <p className="p">{web}</p>
        <p className="p">{name}</p>
        <p className="p">
          {check ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="startsImg"
            />
          ) : (
            pws
          )}
        </p>
      </div>
      <button
        type="button"
        className="deleteButton"
        onClick={onclickDelete}
        testid="delete"
      >
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
