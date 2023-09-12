import './UserProfile.css'

const userProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <div className="checking">
      <img src={imageUrl} className="avatar" alt="User" />
      <div>
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default userProfile
