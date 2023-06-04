import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAllCategories } from '@/pages/api/categories'
import { getCoursesByUserId } from '@/pages/api/courses'
import { useAuth } from '@/pages/contexts/authContext'
import { deleteReceivedCourse, getReceivedCoursesByUserId } from '@/pages/api/receivedCourses'
import { FaTrash } from "react-icons/fa";

export default function CourseList() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [categories, setCategories]=useState([])
  const [courses,setCourses]=useState([])
  const {user}=useAuth();

  const pagePath=useRouter().pathname;

  useEffect(()=>{
    getAllCategories().then(data => {
      setCategories(data);
    }).catch(err => {
      console.log(err);
    });
  },[])

  useEffect(() => {
    if (pagePath === "/given-courses/[id]") {
      // Verilen dersleri getirmek için API çağrısı
      getCoursesByUserId(user?.detail?.id).then(data => {
        setCourses(data);
      }).catch(err => {
        console.log(err);
      });
    } else if (pagePath === "/received-courses/[id]") {
      // Alınan dersleri getirmek için farklı bir API çağrısı
      getReceivedCoursesByUserId(user?.detail?.id).then(data => {
        console.log(data);
        setCourses(data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [pagePath, user]);
  

  const sortOptions = [
    { name: 'En Beğenilenler', href: '#', current: false },
    { name: 'En Çok Değerlendirilenler', href: '#', current: false },
    { name: 'En Popüler', href: '#', current: false },
    { name: 'En Yeniler', href: '#', current: false },
  ]
  
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
                        {categories?.map((category) => (
                          <li key={category.id}>
                            <Link href={"#"}>
                              {category.category_name}
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
            {pagePath==="/received-courses/[id]" ? (
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Alınan Dersler</h1>
            ) : 
            (            
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Verilen Dersler</h1> 
            )}
            <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                {pagePath==="/given-courses/[id]" && (
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 m-1">
                    <Link
                      href="/add-course"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Ders Ekle
                    </Link>
                  </Menu.Button>
                )}
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
                {categories?.map((category) => (
                  <li key={category.id}>
                    <Link href={"#"}>
                      {category.category_name}
                    </Link>
                  </li>
                ))}
                </ul>
            </form>

            {/*Given Courses */}
            {pagePath === "/given-courses/[id]" && (
            <div className="lg:col-span-3">
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {courses?.length > 0 ? courses?.map((course) => (
                          <Link key={course.id} href={"/course-detail/"+course.id}className="group">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                              <img
                              src="https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                              alt="course image"
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                              />
                            <Link href={"#"} className="position-absolute">
                              <button className="rounded-md bg-red-500 px-3 py-2 text-sm border-none font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{ top: '10px', right: '10px'}} type="button" onClick={()=>deleteReceivedCourse(course.id)}>
                                <FaTrash />
                              </button>
                            </Link>
                          </div>
                          <h3 className="mt-4 text-sm text-gray-700">{course.title}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">0 ₺</p>
                          </Link>
                      )): (<p>Verdiğiniz ders bulunmamaktadır...</p>)}
                      </div>
                  </div>
                </div>
            </div>
            )}

            {/* Received Courses */}
            {pagePath === "/received-courses/[id]" && (
            <div className="lg:col-span-3">
                <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {courses?.length > 0 ? courses?.map((course) => (
                        <Link key={course.course.id} href={"/course-detail/"+course.course.id} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                            src="https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt="course image"
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                          <Link href={"#"} className="position-absolute">
                            <button className="rounded-md bg-red-500 px-3 py-2 text-sm border-none font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{ top: '10px', right: '10px'}} type="button" onClick={()=>deleteReceivedCourse(course.id)}>
                              <FaTrash />
                            </button>
                          </Link>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{course.course.title}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">0 ₺</p>
                        </Link>
                    )): (<p>Aldığınız ders bulunmamaktadır...</p>)}
                    </div>
                </div>
                </div>
            </div>
            )}
            
            </div>
        </section>
        </main>
    </div>
    </div>
  )
}
