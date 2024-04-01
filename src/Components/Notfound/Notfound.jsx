import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <Link to={'/'} style={styles.link}>RETURN TO HOME PAGE</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '36px',
    color: 'red',
  },
  message: {
    fontSize: '18px',
    marginTop: '20px',
  },
  link: {
    fontSize: '18px',
    marginTop: '20px',
    color: 'blue',
    textDecoration: 'none',
  },
};


export default Notfound