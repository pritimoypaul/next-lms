import React from "react";

const AllCourse = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[16px] group-data-[sidebar-size=sm]:xl:ml-[16px] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
      <div className="card p-0 lg:min-h-[calc(100vh_-_theme('spacing.header')_*_1.4)] xl:min-h-[calc(100vh_-_theme('spacing.header')_*_1.6)]">
        <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-shade">
          <div>
            <h6 className="card-title">Course list</h6>
            <p className="card-description">All Course Here</p>
          </div>
          <a
            href="create-course.html"
            className="btn b-solid btn-primary-solid"
          >
            Add Course
          </a>
        </div>
        {/* <!-- Start All Language List Table --> */}
        <div className="p-3 sm:p-4">
          <div className="overflow-x-auto scrollbar-table">
            <table className="table-auto w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text leading-none">
              <thead className="border-b border-gray-200 dark:border-dark-border font-semibold">
                <tr>
                  <th className="px-3.5 py-4">Course title</th>
                  <th className="px-3.5 py-4">Price</th>
                  <th className="px-3.5 py-4">Validity</th>
                  <th className="px-3.5 py-4">Progress</th>
                  <th className="px-3.5 py-4 w-10">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                <tr className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white">
                  <td className="flex items-center gap-2 px-3.5 py-4">
                    <a
                      href="#"
                      className="size-[70px] rounded-50 overflow-hidden dk-theme-card-square"
                    >
                      <img
                        src="/assets/images/admin/top-course/top-course-1.png"
                        alt="thumb"
                      />
                    </a>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-dark-text-two mb-1.5">
                        02 Jan 2024
                      </p>
                      <h6 className="text-lg leading-none text-heading font-semibold line-clamp-1">
                        <a href="#">Learn Advanced Web Design Build...</a>
                      </h6>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <i className="ri-star-fill !text-[10px] !text-[#FFA305]"></i>
                          <span className="text-xs font-semibold leading-none">
                            4.5
                          </span>
                        </div>
                        <p className="font-normal text-xs text-gray-900">
                          Author - Jane Howard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">Paid</td>
                  <td className="px-3.5 py-4">Life time</td>
                  <td className="px-3.5 py-4">
                    <div className="w-[136px] bg-primary-200 rounded-full h-1">
                      <div
                        data-value="75"
                        className="bg-primary-500 h-1 rounded-full animate-progress relative"
                        style={{ width: "20%" }}
                      >
                        <div className="absolute -top-5 right-0 inline-block px-2 py-0.5 text-[10px] text-white bg-primary-500 rounded after:absolute after:border-4 after:-bottom-2 after:left-[calc(50%_-_4px)] after:border-transparent after:border-t-primary-500">
                          20%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="edit-course.html"
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
                  <td className="flex items-center gap-2 px-3.5 py-4">
                    <a
                      href="#"
                      className="size-[70px] rounded-50 overflow-hidden dk-theme-card-square"
                    >
                      <img
                        src="/assets/images/admin/top-course/top-course-2.png"
                        alt="thumb"
                      />
                    </a>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-dark-text-two mb-1.5">
                        02 Jan 2023
                      </p>
                      <h6 className="text-lg leading-none text-heading font-semibold line-clamp-1">
                        <a href="#">Introduction to Python Prog...</a>
                      </h6>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <i className="ri-star-fill !text-[10px] !text-[#FFA305]"></i>
                          <span className="text-xs font-semibold leading-none">
                            4.1
                          </span>
                        </div>
                        <p className="font-normal text-xs text-gray-900">
                          Author - Jane Doe
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">Paid</td>
                  <td className="px-3.5 py-4">Life time</td>
                  <td className="px-3.5 py-4">
                    <div className="w-[136px] bg-primary-200 rounded-full h-1">
                      <div
                        data-value="75"
                        className="bg-primary-500 h-1 rounded-full animate-progress relative"
                        style={{ width: "35%" }}
                      >
                        <div className="absolute -top-5 right-0 inline-block px-2 py-0.5 text-[10px] text-white bg-primary-500 rounded after:absolute after:border-4 after:-bottom-2 after:left-[calc(50%_-_4px)] after:border-transparent after:border-t-primary-500">
                          35%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="edit-course.html"
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
                  <td className="flex items-center gap-2 px-3.5 py-4">
                    <a
                      href="#"
                      className="size-[70px] rounded-50 overflow-hidden dk-theme-card-square"
                    >
                      <img
                        src="/assets/images/admin/top-course/top-course-3.png"
                        alt="thumb"
                      />
                    </a>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-dark-text-two mb-1.5">
                        02 Jan 2023
                      </p>
                      <h6 className="text-lg leading-none text-heading font-semibold line-clamp-1">
                        <a href="#">Machine Learning Basic...</a>
                      </h6>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <i className="ri-star-fill !text-[10px] !text-[#FFA305]"></i>
                          <span className="text-xs font-semibold leading-none">
                            4.1
                          </span>
                        </div>
                        <p className="font-normal text-xs text-gray-900">
                          Author - Jane Doe
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">Paid</td>
                  <td className="px-3.5 py-4">Life time</td>
                  <td className="px-3.5 py-4">
                    <div className="w-[136px] bg-primary-200 rounded-full h-1">
                      <div
                        data-value="75"
                        className="bg-primary-500 h-1 rounded-full animate-progress relative"
                        style={{ width: "15%" }}
                      >
                        <div className="absolute -top-5 right-0 inline-block px-2 py-0.5 text-[10px] text-white bg-primary-500 rounded after:absolute after:border-4 after:-bottom-2 after:left-[calc(50%_-_4px)] after:border-transparent after:border-t-primary-500">
                          15%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="edit-course.html"
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
                  <td className="flex items-center gap-2 px-3.5 py-4">
                    <a
                      href="#"
                      className="size-[70px] rounded-50 overflow-hidden dk-theme-card-square"
                    >
                      <img
                        src="/assets/images/admin/top-course/top-course-4.png"
                        alt="thumb"
                      />
                    </a>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-dark-text-two mb-1.5">
                        20 Feb 2019
                      </p>
                      <h6 className="text-lg leading-none text-heading font-semibold line-clamp-1">
                        <a href="#">Graphic Design Essentials...</a>
                      </h6>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <i className="ri-star-fill !text-[10px] !text-[#FFA305]"></i>
                          <span className="text-xs font-semibold leading-none">
                            4.1
                          </span>
                        </div>
                        <p className="font-normal text-xs text-gray-900">
                          Author - Jane Doe
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">Paid</td>
                  <td className="px-3.5 py-4">Life time</td>
                  <td className="px-3.5 py-4">
                    <div className="w-[136px] bg-primary-200 rounded-full h-1">
                      <div
                        data-value="75"
                        className="bg-primary-500 h-1 rounded-full animate-progress relative"
                        style={{ width: "55%" }}
                      >
                        <div className="absolute -top-5 right-0 inline-block px-2 py-0.5 text-[10px] text-white bg-primary-500 rounded after:absolute after:border-4 after:-bottom-2 after:left-[calc(50%_-_4px)] after:border-transparent after:border-t-primary-500">
                          55%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="edit-course.html"
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
                  <td className="flex items-center gap-2 px-3.5 py-4">
                    <a
                      href="#"
                      className="size-[70px] rounded-50 overflow-hidden dk-theme-card-square"
                    >
                      <img
                        src="/assets/images/admin/top-course/top-course-5.png"
                        alt="thumb"
                      />
                    </a>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-dark-text-two mb-1.5">
                        29 Dec 2015
                      </p>
                      <h6 className="text-lg leading-none text-heading font-semibold line-clamp-1">
                        <a href="#">Graphic Design Essentials...</a>
                      </h6>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <i className="ri-star-fill !text-[10px] !text-[#FFA305]"></i>
                          <span className="text-xs font-semibold leading-none">
                            4.1
                          </span>
                        </div>
                        <p className="font-normal text-xs text-gray-900">
                          Author - Jane Doe
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">Paid</td>
                  <td className="px-3.5 py-4">Life time</td>
                  <td className="px-3.5 py-4">
                    <div className="w-[136px] bg-primary-200 rounded-full h-1">
                      <div
                        data-value="75"
                        className="bg-primary-500 h-1 rounded-full animate-progress relative"
                        style={{ width: "95%" }}
                      >
                        <div className="absolute -top-5 right-0 inline-block px-2 py-0.5 text-[10px] text-white bg-primary-500 rounded after:absolute after:border-4 after:-bottom-2 after:left-[calc(50%_-_4px)] after:border-transparent after:border-t-primary-500">
                          95%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3.5 py-4">
                    <div className="flex items-center gap-1">
                      <a
                        href="edit-course.html"
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

export default AllCourse;
