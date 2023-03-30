import { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import { getCookie, setCookie } from '@/lib/cookies';

export default function About() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const acceptedCookie = getCookie('youtubeConsent');
    if (acceptedCookie === 'true') {
      setConsent(true);
    } else {
      setConsent(false);
    }
  }, [consent]);

  const handleAccept = () => {
    setCookie('youtubeConsent', true, 30);
    setConsent(true);
  };

  const handleDecline = () => {
    setCookie('youtubeConsent', false, 30);
    setConsent(false);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        About
      </h1>
      <p className="mb-8 font-primary">
        Youtube consent: {consent ? 'true' : 'false'}
      </p>

      <div className="mb-4 flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-4 shadow-md">
            <h2 className="text-center text-2xl font-bold">Youtube consent</h2>
            <p className="mt-2 text-center text-sm">
              This website uses cookies to improve your experience. Without
              consent we will not load the youtube video.
            </p>
            <div className="mt-4 flex w-full flex-col items-center justify-center space-y-4">
              <button
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleDecline}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      {consent && (
        <div className="mb-4 flex w-full flex-col items-center justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-4 shadow-md">
              <h2 className="text-center text-2xl font-bold">Youtube video</h2>
              <div className="mt-4 flex w-full flex-col items-center justify-center space-y-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_w0Ikk4JY7U"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
