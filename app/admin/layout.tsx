"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-body-light dark:bg-dark-body group-data-[theme-width=box]:container group-data-[theme-width=box]:max-w-screen-3xl xl:group-data-[theme-width=box]:px-4">
      {/* <div
          id="loader"
          className="w-screen h-screen flex-center bg-white dark:bg-dark-card fixed inset-0 z-[9999]"
        >
          <img src="/assets/images/loader.gif" alt="loader" />
        </div> */}
      {/* <!-- Start Header --> */}
      <header className="header px-4 sm:px-6 h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-white dark:bg-dark-card rounded-none xl:rounded-15 flex items-center mb-4 xl:m-4 group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_32px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_32px)] group-data-[sidebar-size=sm]:group-data-[theme-width=box]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] group-data-[theme-width=box]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[theme-width=box]:xl:mr-0 dk-theme-card-square ac-transition">
        <div className="flex-center-between grow">
          {/* <!-- Header Left --> */}
          <div className="menu-hamburger-container flex-center">
            <button
              type="button"
              id="app-menu-hamburger"
              className="menu-hamburger hidden xl:block dk-theme-card-square"
            ></button>
            <button
              type="button"
              className="menu-hamburger block xl:hidden dk-theme-card-square"
              data-drawer-target="app-drawer"
              data-drawer-show="app-drawer"
              aria-controls="app-drawer"
            ></button>
          </div>
          {/* <!-- Header Right --> */}
          <div className="flex items-center gap-5 md:gap-3">
            <div className="w-56 md:w-72 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
              <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
                <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]"></i>
              </span>
              <input
                type="text"
                name="header-search"
                id="header-search"
                placeholder="Search..."
                className="form-input border-gray-200 dark:border-dark-border pl-[36px] pr-12 py-4 rounded-full dk-theme-card-square"
              />
              <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
                <i className="ri-command-line text-[12px]"></i>
                <span>+</span>
                <span>k</span>
              </span>
            </div>
            {/* <!-- Dark Light Button --> */}
            <button
              type="button"
              className="themeMode size-8 hidden md:flex-center hover:bg-gray-200 dark:hover:bg-dark-icon rounded-md dk-theme-card-square"
              onClick={() => {
                // toggleThemeMode()
              }}
            >
              <i className="ri-contrast-2-line text-[22px] group-[.dark]:before:!content-['\f1bf']"></i>
            </button>
            {/* <!-- Settings Button --> */}
            <button
              type="button"
              className="size-8 hidden md:flex-center hover:bg-gray-200 dark:hover:bg-dark-icon rounded-md dk-theme-card-square"
              data-drawer-target="drawer-app-setting"
              data-drawer-show="drawer-app-setting"
              data-drawer-placement="right"
              aria-controls="drawer-app-setting"
            >
              <i className="ri-settings-3-line text-[22px] animate-spin-slow"></i>
            </button>
            {/* <!-- Notification Button --> */}
            <div className="relative">
              <button
                type="button"
                data-popover-target="dropdownNotification"
                data-popover-trigger="click"
                data-popover-placement="bottom-end"
                className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon rounded-md dk-theme-card-square"
              >
                <i className="ri-notification-3-line text-[24px]"></i>
                <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">
                  0
                </span>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNotification"
                className="!-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four dk-theme-card-square"
              >
                <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white dk-theme-card-square">
                  Notifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                  <a
                    href="all-notice.html"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="size-10 rounded-50 dk-theme-card-square"
                        src="/assets/images/user/user-1.png"
                        alt="user"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">
                        New message from{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Jese Leos
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="all-notice.html"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="size-10 rounded-50 dk-theme-card-square"
                        src="/assets/images/user/user-2.png"
                        alt="user"
                      />
                    </div>
                    <div className="w-full ps-3">
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">
                        New message from{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Jese Leos
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        10 min ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="all-notice.html"
                  className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white dk-theme-card-square"
                >
                  View all
                </a>
              </div>
            </div>
            {/* <!-- Language Select Button --> */}
            <div className="relative hidden md:block">
              <button
                type="button"
                data-popover-target="dropdownLanguage"
                data-popover-trigger="click"
                data-popover-placement="bottom-end"
                className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-dark-icon rounded-md dk-theme-card-square"
              >
                <img
                  id="header-lang-img"
                  src="/assets/images/flag/us.svg"
                  alt="flag"
                  className="size-5 rounded-sm"
                  title="English"
                />
              </button>
              {/* <!-- Dropdown --> */}
              <div
                id="dropdownLanguage"
                className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade dk-theme-card-square"
              >
                <a
                  href="#"
                  className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                  data-lang="en"
                  title="English"
                >
                  <img
                    src="/assets/images/flag/us.svg"
                    alt="flag"
                    className="object-cover size-4 rounded-50 dk-theme-card-square"
                  />
                  <h6 className="font-medium text-gray-500 dark:text-white">
                    English
                  </h6>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                  data-lang="sp"
                  title="Spanish"
                >
                  <img
                    src="/assets/images/flag/es.svg"
                    alt="flag"
                    className="object-cover size-4 rounded-50 dk-theme-card-square"
                  />
                  <h6 className="font-medium text-gray-500 dark:text-white">
                    Spanish
                  </h6>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                  data-lang="fr"
                  title="French"
                >
                  <img
                    src="/assets/images/flag/fr.svg"
                    alt="flag"
                    className="object-cover size-4 rounded-50 dk-theme-card-square"
                  />
                  <h6 className="font-medium text-gray-500 dark:text-white">
                    French
                  </h6>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                  data-lang="it"
                  title="Italian"
                >
                  <img
                    src="/assets/images/flag/it.svg"
                    alt="flag"
                    className="object-cover size-4 rounded-50 dk-theme-card-square"
                  />
                  <h6 className="font-medium text-gray-500 dark:text-white">
                    Italian
                  </h6>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                  data-lang="ar"
                  title="Arabic"
                >
                  <img
                    src="/assets/images/flag/ar.svg"
                    alt="flag"
                    className="object-cover size-4 rounded-50 dk-theme-card-square"
                  />
                  <h6 className="font-medium text-gray-500 dark:text-white">
                    Arabic
                  </h6>
                </a>
              </div>
            </div>
            {/* <!-- Border --> */}
            <div className="w-[1px] h-header bg-gray-200 dark:bg-dark-border hidden sm:block"></div>
            {/* <!-- User Profile Button --> */}
            <div className="relative">
              <button
                type="button"
                data-popover-target="dropdownProfile"
                data-popover-trigger="click"
                data-popover-placement="bottom-end"
                className="flex items-center"
              >
                <img
                  src="/assets/images/user/profile-img.png"
                  alt="user-img"
                  className="size-9 rounded-50 dk-theme-card-square"
                />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownProfile"
                className="invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four dk-theme-card-square"
              >
                <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                  <div className="card-title text-lg">Alex Janson</div>
                  <div className="truncate">alex2425@gmail.com</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="index.html"
                      className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-setting.html"
                      className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="sign-in.html"
                    className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- Start App Menu --> */}
      <div
        id="app-drawer"
        className="app-menu flex flex-col bg-white dark:bg-dark-card w-app-menu fixed top-0 left-0 bottom-0 -translate-x-full group-data-[sidebar-size=sm]:min-h-screen group-data-[sidebar-size=sm]:h-max border-r-2 border-primary-400 xl:border-none xl:translate-x-0 rounded-r-15 xl:rounded-15 xl:group-data-[sidebar-size=lg]:w-app-menu xl:group-data-[sidebar-size=sm]:w-app-menu-sm xl:group-data-[sidebar-size=sm]:absolute xl:group-data-[sidebar-size=lg]:fixed xl:top-4 xl:left-4 xl:group-data-[sidebar-size=lg]:bottom-4 xl:group-data-[theme-width=box]:left-auto dk-theme-card-square z-backdrop ac-transition"
        tabIndex={-1}
      >
        <div className="px-6 group-data-[sidebar-size=sm]:px-4 h-header flex items-center shrink-0 group-data-[sidebar-size=sm]:justify-center">
          <a
            href="index.html"
            className="group-data-[sidebar-size=lg]:block hidden"
          >
            <img
              src="/assets/images/logo/logo-text.svg"
              alt="logo"
              className="group-[.dark]:hidden"
            />
            <img
              src="/assets/images/logo/logo-text-dark.svg"
              alt="logo"
              className="group-[.light]:hidden"
            />
          </a>
          <a
            href="index.html"
            className="group-data-[sidebar-size=lg]:hidden block"
          >
            <img src="/assets/images/logo/logo-icon.svg" alt="logo" />
          </a>
        </div>
        <div
          id="app-menu-scrollbar"
          data-scrollbar
          className="px-2.5 group-data-[sidebar-size=sm]:px-0 group-data-[sidebar-size=sm]:!overflow-visible !overflow-x-hidden smooth-scrollbar"
        >
          <div className="group-data-[sidebar-size=lg]:max-h-full">
            <ul
              id="navbar-nav"
              className="text-[14px] !leading-none space-y-1 group-data-[sidebar-size=sm]:space-y-2.5 group-data-[sidebar-size=sm]:flex group-data-[sidebar-size=sm]:flex-col group-data-[sidebar-size=sm]:items-start group-data-[sidebar-size=sm]:mx-2 group-data-[sidebar-size=sm]:overflow-visible"
            >
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1H5.2zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04h-.05zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04m.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04h-.05zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Dashboard
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <Link
                        href="/admin/dashboard"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 dark:before:border-text-dark hover:before:border-none hover:before:bg-primary-400 dark:hover:before:bg-text-dark [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 dark:[&.active]:before:bg-text-dark group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Admin
                      </Link>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="dashboard-instructor.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 dark:before:border-text-dark hover:before:border-none hover:before:bg-primary-400 dark:hover:before:bg-text-dark [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 dark:[&.active]:before:bg-text-dark group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Instructor
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="dashboard-student.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 dark:before:border-text-dark hover:before:border-none hover:before:bg-primary-400 dark:hover:before:bg-text-dark [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 dark:[&.active]:before:bg-text-dark group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Student
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M27 22.141V18a2 2 0 0 0-2-2h-8v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H7a2 2 0 0 0-2 2v4.142a4 4 0 1 0 2 0V18h8v4.142a4 4 0 1 0 2 0V18h8v4.141a4 4 0 1 0 2 0M13 4h6l.001 6H13ZM8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10 0a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2m8 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Course Category
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <Link
                        href="/admin/all-course-category"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        All Course Category
                      </Link>
                    </li>
                    <li className="relative group/sub">
                      <Link
                        href="/admin/create-course-category"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Create Course Category
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Course Manage
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <a
                        href="#"
                        className="dropdown-button second-layer relative peer/dp-btn text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Subject
                      </a>
                      <div className="dropdown-content max-h-0 overflow-hidden hidden group-data-[sidebar-size=sm]:!max-h-max group-data-[sidebar-size=sm]:overflow-visible group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-full group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:-right-full top-0 group-data-[sidebar-size=sm]:group-hover/sub:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                        <ul className="text-[14px] pl-3.5 group-data-[sidebar-size=sm]:pl-0">
                          <li className="relative group/sub">
                            <Link
                              href="/admin/all-subject"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              All Subject List
                            </Link>
                          </li>
                          <li className="relative group/sub">
                            <a
                              href="create-subject.html"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              Create new Subject
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="course-tag.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Tag
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="course-label.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Label
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="#"
                        className="dropdown-button second-layer relative peer/dp-btn text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Course
                      </a>
                      <div className="dropdown-content max-h-0 overflow-hidden hidden group-data-[sidebar-size=sm]:!max-h-max group-data-[sidebar-size=sm]:overflow-visible group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-full group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:-right-full top-0 group-data-[sidebar-size=sm]:group-hover/sub:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                        <ul className="text-[14px] pl-3.5 group-data-[sidebar-size=sm]:pl-0">
                          <li className="relative group/sub">
                            <Link
                              href="/admin/all-course"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              All Course List
                            </Link>
                          </li>
                          <li className="relative group/sub">
                            <a
                              href="create-course.html"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              Create new Course
                            </a>
                          </li>
                          <li className="relative group/sub">
                            <a
                              href="edit-course.html"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              Edit Course
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="#"
                        className="dropdown-button second-layer relative peer/dp-btn text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Course Bundle
                      </a>
                      <div className="dropdown-content max-h-0 overflow-hidden hidden group-data-[sidebar-size=sm]:!max-h-max group-data-[sidebar-size=sm]:overflow-visible group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-full group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:-right-full top-0 group-data-[sidebar-size=sm]:group-hover/sub:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                        <ul className="text-[14px] pl-3.5 group-data-[sidebar-size=sm]:pl-0">
                          <li className="relative group/sub">
                            <a
                              href="all-course-bundle.html"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              All Course Bundle
                            </a>
                          </li>
                          <li className="relative group/sub">
                            <a
                              href="create-course-bundle.html"
                              className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                            >
                              Create Course Bundle
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM11 5h2v6h-2zm0 8h2v2h-2z"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Notice Board
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <a
                        href="all-notice.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        All Notice
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="create-notice.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Create Notice
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M0 2.75C0 1.783.784 1 1.75 1h12.5c.967 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.457 1.457 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.189l2.72-2.719a.75.75 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm20.5 6h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5c.199 0 .39.079.53.22l2.72 2.719V19.25a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25m-9.72-3.22l-5 5a.747.747 0 0 1-1.06 0l-2.5-2.5a.749.749 0 1 1 1.06-1.06L7 8.689l4.47-4.469a.749.749 0 1 1 1.06 1.06"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Forums
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <a
                        href="all-forum.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        All Forum
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="create-forum.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Create Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        color="currentColor"
                      >
                        <path d="M2 2h14c1.886 0 2.828 0 3.414.586S20 4.114 20 6v6c0 1.886 0 2.828-.586 3.414S17.886 16 16 16H9m1-9.5h6M2 17v-4c0-.943 0-1.414.293-1.707S3.057 11 4 11h2m-4 6h4m-4 0v5m4-5v-6m0 6v5m0-11h6" />
                        <path d="M6 6.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                      </g>
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Instructor Manage
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <Link
                        href="/admin/all-instructor"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Instructor List
                      </Link>
                    </li>
                    <li className="relative group/sub">
                      <Link
                        href="/admin/create-instructor"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Create Instructor
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14.8 8L16 9.2L9.2 16L8 14.8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 1 0 0 4v4c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2m0 2v2.54a3.994 3.994 0 0 1 0 6.92V18h16v-2.54a3.994 3.994 0 0 1 0-6.92V6zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11S8 10.33 8 9.5S8.67 8 9.5 8m5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Coupons
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <a
                        href="all-coupon.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        All Coupon
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="create-coupon.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Create Coupon
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                <a
                  href="#"
                  className="dropdown-button top-layer relative leading-none px-3.5 py-3 h-[42px] flex items-center rounded-md group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full text-gray-500 dark:text-dark-text-two hover:text-primary-500 dark:hover:text-white [&.active]:text-primary-500 dark:[&.active]:text-white group-data-[sidebar-size=sm]:border group-data-[sidebar-size=sm]:border-gray-200 dark:group-data-[sidebar-size=sm]:border-dark-border-four hover:!bg-primary-200 dark:hover:!bg-primary-500 [&.active]:bg-primary-200 dark:[&.active]:bg-primary-500 group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-card group-data-[sidebar-size=sm]:hover:bg-primary-500 group-data-[sidebar-size=sm]:[&.active]:bg-primary-200 dark:group-data-[sidebar-size=sm]:[&.active]:bg-primary-500 group/menu-link peer/dp-btn dk-theme-card-square ac-transition"
                >
                  <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
                      />
                    </svg>
                  </span>
                  <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                    Testimonial
                  </span>
                </a>
                <div className="dropdown-content max-h-0 group-data-[sidebar-size=sm]:!max-h-max overflow-hidden group-data-[sidebar-size=sm]:overflow-visible hidden group-data-[sidebar-size=lg]:block peer-[.show]/dp-btn:my-1.5 group-data-[sidebar-size=sm]:!my-0 group-data-[sidebar-size=lg]:w-[calc(theme('spacing.app-menu')_-_16px)] group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_2.5)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:left-[calc(theme('spacing.app-menu-sm')_*_0.9)] top-full group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:bg-white dark:group-data-[sidebar-size=sm]:bg-dark-tooltip group-data-[sidebar-size=sm]:shadow-menu-dropdown transition-all duration-300">
                  <ul className="text-[14px] pl-1.5 group-data-[sidebar-size=sm]:pl-0">
                    <li className="relative group/sub">
                      <a
                        href="all-testimonial.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        List
                      </a>
                    </li>
                    <li className="relative group/sub">
                      <a
                        href="create-testimonial.html"
                        className="relative peer/link text-gray-500 dark:text-dark-text-two font-medium leading-none px-5 py-2.5 group-data-[sidebar-size=lg]:pl-8 flex hover:text-primary-500 dark:hover:text-dark-text [&.active]:text-primary-500 dark:[&.active]:text-dark-text before:absolute before:top-[49%] before:-translate-y-1/2 before:left-4 before:size-1.5 before:rounded-50 before:border before:border-gray-400 hover:before:border-none hover:before:bg-primary-400 [&.active]:before:border-none group-data-[sidebar-size=sm]:after:block group-data-[sidebar-size=sm]:after:right-3 [&.active]:before:bg-primary-400 group-data-[sidebar-size=sm]:before:hidden"
                      >
                        Create New
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Logout Link --> */}
        <div className="mt-auto px-2.5 py-6 group-data-[sidebar-size=sm]:px-2">
          <a
            href="sign-in.html"
            className="flex-center-between text-gray-500 font-semibold leading-none bg-gray-200 dark:bg-dark-icon dark:text-dark-text rounded-[10px] px-6 py-4 group-data-[sidebar-size=sm]:p-[12px_8px] group-data-[sidebar-size=sm]:justify-center dk-theme-card-square"
          >
            <span className="group-data-[sidebar-size=sm]:hidden block">
              Logout
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M5 5h7V3H3v18h9v-2H5z" />
              <path fill="currentColor" d="m21 12l-4-4v3H9v2h8v3z" />
            </svg>
          </a>
        </div>
      </div>
      {/* <!-- End App Menu --> */}

      {/* <!-- Start Main Content --> */}
      <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
        {children}
      </div>
      {/* <!-- End Main Content --> */}
      <Script src="/assets/js/vendor/jquery.min.js"></Script>

      {/* <Script src="/assets/js/vendor/apexcharts.min.js"></Script> */}
      <Script src="/assets/js/vendor/flowbite.min.js"></Script>
      <Script src="/assets/js/vendor/smooth-scrollbar/smooth-scrollbar.min.js"></Script>
      <Script src="/assets/js/pages/dashboard-admin-lms.js"></Script>
      <Script src="/assets/js/component/app-menu-bar.js"></Script>
      <Script src="/assets/js/switcher.js"></Script>
      <Script src="/assets/js/layout.js"></Script>
      <Script src="/assets/js/main.js"></Script>
    </body>
  );
}
