import React from 'react';

const BlockPage = () => {
  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Access Denied</h1>
      <p style={styles.message}>
        You don't have permission to access this page. If you think this is a mistake, please contact the administrator.
      </p>
      <button onClick={redirectToHome} style={styles.button}>
        Go to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  button: {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#d9534f',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BlockPage;
