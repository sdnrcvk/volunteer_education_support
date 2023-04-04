import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, UserIcon} from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Ana Sayfa', href: '/', current: true },
  { name: 'Özel Dersler', href: '/courses', current: false },
  { name: 'Bize Ulaşın', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" style={{backgroundColor:"#EEEEEE"}}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="logo.png" width="150"
                    alt="Site Logosu"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="logo.png" width="150"
                    alt="Site Logosu"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-dark-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <span className="inline-block align-middle">
                              <UserIcon className="h-5" aria-hidden="true" />
                            </span>
                            <span className="inline-block align-middle ml-2">
                              Profil
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <span className="inline-block align-middle">
                              <Cog6ToothIcon className="h-5" aria-hidden="true" />
                            </span>
                            <span className="inline-block align-middle ml-2">
                              Ayarlar
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <span className="inline-block align-middle">
                              <ArrowRightOnRectangleIcon className="h-5" aria-hidden="true" />
                            </span>
                            <span className="inline-block align-middle ml-2">
                              Çıkış Yap
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-dark-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


// import React from 'react'
// import Link from 'next/link'
// import { FaUser, FaSignOutAlt } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-warning">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img src="logo.png" alt="VEDUS Logo" width="150"/>
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//             <form className="d-flex flex-grow-1 justify-content-center" role="search">
//               <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn text-light" type="submit" style={{backgroundColor:"#0B2447"}}>Ara</button>
//             </form>
//             {/* Menü Kısmı Başlangıç */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" href="/">Ana Sayfa</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/courses">Özel Dersler</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/contact">Bize Ulaşın</Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   <FaUser/> Sedanur Çevik
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><Link className="dropdown-item" href="/">Profilim</Link></li>
//                   <li><Link className="dropdown-item" href="/courses">Verdiğim Dersler</Link></li>
//                   <li><Link className="dropdown-item" href="/contact">Aldığım Dersler</Link></li>
//                   <li><hr className="dropdown-divider"/></li>
//                   <li><a className="dropdown-item" href="#">
//                     <FaSignOutAlt/> Çıkış Yap</a></li>
//                 </ul>
//               </li>
//             </ul>
//              {/* Menü Kısmı Bitiş*/}
//         </div>
//       </div>
//     </nav>
//   )
// }
