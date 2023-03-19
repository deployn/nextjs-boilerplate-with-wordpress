export const getCookie = (name: any) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookie = parts.pop();
    if (cookie) {
      return cookie.split(';').shift();
    }
    return null;
  }
  return null;
};

export const setCookie = (name: string, value: any, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

export const deleteCookie = (name: any) => {
  document.cookie = `${name}=; Max-Age=-99999999;`;
};
