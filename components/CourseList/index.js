import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CourseList() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const pagePath=useRouter().pathname;

  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '/course-detail',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '/course-detail',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '/course-detail',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '/course-detail',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Machined Mechanical Pencil',
      href: '/course-detail',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Focus Paper Refill',
      href: '/course-detail',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 7,
      name: 'Nomad Tumbler',
      href: '/course-detail',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 8,
      name: 'Earthen Bottle',
      href: '/course-detail',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    }
  ]

  const sortOptions = [
    { name: 'En Beğenilenler', href: '#', current: false },
    { name: 'En Çok Değerlendirilenler', href: '#', current: false },
    { name: 'En Popüler', href: '#', current: false },
    { name: 'En Yeniler', href: '#', current: false },
  ]
  
  const subCategories = [
    { name: 'Türkçe', href: '#' },
    { name: 'Matematik', href: '#' },
    { name: 'Sosyal Bilimler', href: '#' },
    { name: 'Fen Bilimleri', href: '#' },
  ]
  
  // const filters = [
  //   {
  //     id: 'category',
  //     name: 'Category',
  //     options: [
  //       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
  //       { value: 'sale', label: 'Sale', checked: false },
  //       { value: 'travel', label: 'Travel', checked: true },
  //       { value: 'organization', label: 'Organization', checked: false },
  //       { value: 'accessories', label: 'Accessories', checked: false },
  //     ],
  //   },
  //   {
  //     id: 'size',
  //     name: 'Size',
  //     options: [
  //       { value: '2l', label: '2L', checked: false },
  //       { value: '6l', label: '6L', checked: false },
  //       { value: '12l', label: '12L', checked: false },
  //       { value: '18l', label: '18L', checked: false },
  //       { value: '20l', label: '20L', checked: false },
  //       { value: '40l', label: '40L', checked: true },
  //     ],
  //   },
  // ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="bg-white">
    <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
            <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Kategoriler</h2>
                    <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                    {subCategories.map((category) => (
                        <li key={category.name}>
                        <Link href={category.href} className="block px-2 py-3">
                            {category.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </form>
                </Dialog.Panel>
            </Transition.Child>
            </div>
        </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            {pagePath==="/received-courses" ? (
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Alınan Dersler</h1>
            ) : 
            (            
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Verilen Dersler</h1> 
            )}
            <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 m-1">
                  <Link
                    href="/add-course"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ders Vermek İstiyorum
                  </Link>
                </Menu.Button>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 m-1">
                    Sırala
                    <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                        {({ active }) => (
                            <Link
                            href={option.href}
                            className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            {option.name}
                            </Link>
                        )}
                        </Menu.Item>
                    ))}
                    </div>
                </Menu.Items>
                </Transition>
            </Menu>

            <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
            >
                <span className="sr-only">Filtre</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
                <h2 className="text-lg mb-3 font-medium text-gray-900">Kategoriler</h2>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {subCategories.map((category) => (
                    <li key={category.name}>
                        <Link href={category.href}>{category.name}</Link>
                    </li>
                ))}
                </ul>
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">
                <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.length > 0 ? products.map((product) => (
                        <Link key={product.id} href={product.href} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </Link>
                    )): (<p>Ders bulunmamaktadır...</p>)}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>
    </div>
    </div>
  )
}
