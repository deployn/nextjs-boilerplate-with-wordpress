import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import Link from '@/components/Link';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={[
                  pathname === '/'
                    ? 'text-primary-400 hover:text-primary-900'
                    : 'text-gray-400 hover:text-gray-900',
                  'h-8 w-auto sm:h-10',
                ].join(' ')}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link href="/about">
              <span
                className={[
                  'text-base font-medium',
                  pathname === '/about'
                    ? 'text-primary-400 hover:text-primary-900'
                    : 'text-gray-400 hover:text-gray-900',
                ].join(' ')}
              >
                About
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={[
                  'text-base font-medium',
                  pathname === '/contact'
                    ? 'text-primary-400 hover:text-primary-900'
                    : 'text-gray-400 hover:text-gray-900',
                ].join(' ')}
              >
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={[
                        pathname === '/'
                          ? 'text-primary-400 hover:text-primary-900'
                          : 'text-gray-400 hover:text-gray-900',
                        'h-8 w-auto sm:h-10',
                      ].join(' ')}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/about">
                  <span
                    className={[
                      'text-base font-medium',
                      pathname === '/about'
                        ? 'text-primary-900 hover:text-primary-700'
                        : 'text-gray-900 hover:text-gray-700',
                    ].join(' ')}
                  >
                    About
                  </span>
                </Link>

                <Link href="/contact">
                  <span
                    className={[
                      'text-base font-medium',
                      pathname === '/contact'
                        ? 'text-primary-900 hover:text-primary-700'
                        : 'text-gray-900 hover:text-gray-700',
                    ].join(' ')}
                  >
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
