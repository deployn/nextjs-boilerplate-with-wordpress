import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  const getCookie = (name: any) => {
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

  useEffect(() => {
    const cookie = getCookie('acceptedCookies');
    if (!cookie) {
      setShowBanner(true);
    }
  }, []);

  const setCookie = (name: string, value: any, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const handleAccept = () => {
    setCookie('acceptedCookies', true, 30);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie('acceptedCookies', false, 30);
    setShowBanner(false);
  };

  return (
    <div
      className={`${
        showBanner ? 'block' : 'hidden'
      } fixed inset-x-0 bottom-0 bg-gray-900 px-4 py-6 text-white`}
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="ml-3 text-sm font-medium leading-5 text-white">
              Our website uses cookies. Do you accept all cookies?
            </p>
          </div>
          <div className="order-3 ml-4 shrink-0">
            <button
              onClick={handleAccept}
              className="ml-3 inline-flex text-white focus:outline-none"
            >
              <span className="rounded-md bg-green-800 p-2 text-sm font-medium leading-5">
                Accept
              </span>
            </button>
            <button
              onClick={handleDecline}
              className="ml-3 inline-flex text-white focus:outline-none"
            >
              <span className="rounded-md bg-primary-800 p-2 text-sm font-medium leading-5">
                Decline
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
