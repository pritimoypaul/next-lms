import Link from "next/link";
import React from "react";

const AllCourseCategory = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[16px] group-data-[sidebar-size=sm]:xl:ml-[16px] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
      <div className="card p-0 lg:min-h-[calc(100vh_-_theme('spacing.header')_*_1.4)] xl:min-h-[calc(100vh_-_theme('spacing.header')_*_1.6)]">
        <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-shade">
          <div>
            <h6 className="card-title">Course Category list</h6>
            <p className="card-description">All Category Here</p>
          </div>
          <Link
            href="/admin/create-course-category"
            className="btn b-solid btn-primary-solid"
          >
            Add Category
          </Link>
        </div>
        {/* <!-- Start All Language List Table --> */}
        <div className="p-3 sm:p-4">
          <div className="overflow-x-auto scrollbar-table">
            <table className="table-auto w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text leading-none">
              <thead className="border-b border-gray-200 dark:border-dark-border font-semibold">
                <tr>
                  <th className="px-3.5 py-4">Category Name</th>
                  <th className="px-3.5 py-4">Status</th>
                  <th className="px-3.5 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">Programing</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">JavaScript</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">Web Development</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">Web Design</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">UI/UX</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">Business Growth</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">Job Success</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="px-3.5 py-4">Basic Graphic Design</td>
                  <td className="px-3.5 py-4">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none peer"
                        checked
                      />
                      <span className="switcher switcher-primary-solid"></span>
                    </label>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="create-course-category.html"
                        className="btn-icon btn-primary-icon-light size-7"
                      >
                        <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                      </a>
                      <button
                        className="btn-icon btn-danger-icon-light size-7"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                      >
                        <i className="ri-delete-bin-line text-danger text-[13px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- End All Language List Table --> */}
      </div>
    </div>
  );
};

export default AllCourseCategory;
