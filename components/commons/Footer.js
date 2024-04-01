import React from 'react'

const Footer = () => {
  return (
    <footer className="text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <span className="text-gray-600">© 2024 HealthChain. All rights reserved.</span>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-yellow-500"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-yellow-500"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </footer>
  )
}

export default Footer