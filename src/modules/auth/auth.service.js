async function authenticate(login, pass){

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({isAuthenticated: true}), 1000)
  });

  return await promise; 
}

export {authenticate};