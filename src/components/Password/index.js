import {Component} from 'react'
import './index.css'
import YourPassword from '../YourPassword'

class Password extends Component {
  state = {website: '', username: '', password: '', list: [], searchInput: ''}

  onSubmitAdd = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newList = {
      web: website,
      name: username,
      pws: password,
    }
    this.setState(prv => ({
      list: [...prv.list, newList],
      website: '',
      username: '',
      password: '',
    }))
  }

  searchingResult = () => {
    const {list, searchInput} = this.state
    const result = list.filter(each =>
      each.web.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return result
  }

  onchangeWebSite = event => {
    this.setState({website: event.target.value})
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onchangeSearchResult = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {website, username, password, list, searchInput} = this.state
    const searchResult = this.searchingResult()
    return (
      <div className="bg">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="imgLogo"
          />
        </div>
        <div className="password-container">
          <form onSubmit={this.onSubmitAdd} className="form">
            <h1 className="add-password-para">Add New Password</h1>
            <div className="input-containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="inputIconImg"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                value={website}
                onChange={this.onchangeWebSite}
              />
            </div>
            <div className="input-containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="inputIconImg"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={username}
                onChange={this.onchangeUsername}
              />
            </div>
            <div className="input-containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="passwords"
                className="inputIconImg"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.onchangePassword}
              />
            </div>

            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-Img"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="your-password-container">
            <div className="your-password-container">
              <h1 className="add-password-para">Your Passwords</h1>
              <p className="count">{searchResult.length}</p>
            </div>
            <div className="input-containers margin">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="inputIconImg"
              />
              <input
                type="search"
                placeholder="Search"
                className="input"
                value={searchInput}
                onChange={this.onchangeSearchResult}
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="label">
              Show passwords
            </label>
          </div>
          <ul className="ul">
            {searchResult.length > 0 ? (
              searchResult.map(each => <YourPassword each={each} />)
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwordImg"
                />
                <p className="add-password-para">No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default Password
