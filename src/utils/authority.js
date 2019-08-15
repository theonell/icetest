// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  let authority =  localStorage.getItem('ice-pro-authority');
  if (authority) {
    if (authority.includes('[')) {
      authority = JSON.parse(authority);
    } else {
      authority = [authority];
    }
  } else {
    authority = ['admin'];
  }
  return authority;
}

export function setAuthority(authority) {
  return localStorage.setItem('ice-pro-authority', authority);
}

export function removeAuthority() {
  return localStorage.removeItem('ice-pro-authority');
}
