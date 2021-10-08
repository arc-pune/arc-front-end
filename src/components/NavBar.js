/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Login from "../pages/login";
import PaletteThemeChanger from "./PaletteThemeChanger";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Adopt", href: "#", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [login, setLogin] = useState(false);
  return (
    <Disclosure as='nav' className='pt-2'>
      {({ open }) => (
        <div>
          <div className='px-2 sm:px-6 lg:px-48'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 dark:text-gray-200 hover:text-white dark:hover:text-gray-900 hover:bg-gray-700 dark:hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-900'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <a href='/'>
                <div className='flex-shrink-0 flex items-center '>
                  <img
                    className='block lg:hidden h-8 w-auto ml-14'
                    src='/Assets/icons/logo.svg'
                    alt='Workflow'
                  />
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src='/Assets/icons/logo.svg'
                    alt='Workflow'
                  />
                </div>
              </a>
              <div className='flex-1 flex items-center justify-center '>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-black dark:text-white border-b-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            : "text-gray-900 dark:text-gray-100",
                          "px-7 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='p-2 w-full'>
                  <button
                    onClick={() => {
                      setLogin(true);
                    }}
                    className='flex mx-auto border-0 font-medium py-2 px-8 focus:outline-none rounded-xl text-lg hover:underline'
                  >
                    Login
                  </button>
                  {login ? <Login setLogin={setLogin} /> : ""}
                </div>

                <div className='p-2 w-full'>
                  <button className='flex font-medium text-white dark:text-black dark:bg-white bg-black border-0 py-2 px-8 focus:outline-none rounded-lg text-lg hover:bg-gray-800 dark:hover:bg-gray-100'>
                    SignUp
                  </button>
                </div>
                <div className='p-2 w-full'>
                  <PaletteThemeChanger />
                </div>
                {/* Profile dropdown */}
                {/* <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
