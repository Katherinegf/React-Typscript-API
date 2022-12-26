import NotFoundImage from '../assets/Images/Error-404.png'

const NotFoundView: React.FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-center align-items-center vh-100">
        <img src={NotFoundImage} alt="404-Page Not Found" style={{ height: "768px"}} />
        <h1 className="ms-4" style={{ fontSize: "3rem"}}>The Page you were looking for couldn't be found.</h1>
      </div>
    </div>
  )
}

export default NotFoundView