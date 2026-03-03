import React from 'react'

const Footer = ({title = "XITS",contact="1234569870",email="abc@gmail.com"}) => {
  return (
    <footer className="bg-light text-dark mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h5>{title}</h5>
            <p className="text-muted">
              Providing quality services and facilities with dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none">About</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Facilities</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p className="mb-1">{contact}</p>
            <p className="mb-0">{email}</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary text-white text-center py-2">
        © {new Date().getFullYear()} {title}. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
