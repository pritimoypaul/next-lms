import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllStudent = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[16px] group-data-[sidebar-size=sm]:xl:ml-[16px] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
      <div className="card p-0 lg:min-h-[calc(100vh_-_theme('spacing.header')_*_1.4)] xl:min-h-[calc(100vh_-_theme('spacing.header')_*_1.6)]">
        <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-shade">
          <div>
            <h6 className="card-title">Student list</h6>
            <p className="card-description">All Student Here</p>
          </div>
          <Link
            href="/admin/create-student"
            className="btn b-solid btn-primary-solid"
          >
            Add Student
          </Link>
        </div>
        {/* Start All Student List Table */}
        <div className="p-3 sm:p-4">
          <div className="overflow-x-auto scrollbar-table">
            <table className="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
              <thead>
                <tr className="text-primary-500">
                  <th className="px-4 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg dk-theme-card-square">
                    Name
                  </th>
                  <th className="px-4 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg dk-theme-card-square">
                    Email
                  </th>
                  <th className="px-4 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg dk-theme-card-square">
                    Phone
                  </th>
                  <th className="px-4 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg dk-theme-card-square">
                    Country
                  </th>
                  <th className="px-4 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg dk-theme-card-square">
                    Total Course
                  </th>
                  <th className="px-4 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg dk-theme-card-square w-10">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                {[
                  {
                    name: "Eleanor Pena",
                    role: "UX/UI Design",
                    email: "eleanor@gmail.com",
                    phone: "9658242545",
                    country: "South America",
                    courses: "5 - Course",
                    image: "/assets/images/student/student-2.png",
                  },
                  {
                    name: "Esther Howard",
                    role: "Web & Mobile Application",
                    email: "howard@gmail.com",
                    phone: "2145872545",
                    country: "Canada",
                    courses: "8 - Course",
                    image: "/assets/images/student/student-1.png",
                  },
                  {
                    name: "Albert Flores",
                    role: "Business Strategy",
                    email: "albert@gmail.com",
                    phone: "214584056",
                    country: "Swizerland",
                    courses: "1 - Course",
                    image: "/assets/images/student/student-3.png",
                  },
                  {
                    name: "Darlena Robertson",
                    role: "Frontend Developer",
                    email: "darlena@gmail.com",
                    phone: "4214587935",
                    country: "Japhan",
                    courses: "10 - Course",
                    image: "/assets/images/student/student-4.png",
                  },
                  {
                    name: "Devon Lane",
                    role: "Visual Designer",
                    email: "devon@gmail.com",
                    phone: "9658242545",
                    country: "Australia",
                    courses: "15 - Course",
                    image: "/assets/images/student/student-5.png",
                  },
                ].map((student, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3.5">
                        <Link
                          href="#"
                          className="size-12 rounded-50 overflow-hidden dk-theme-card-square"
                        >
                          <Image
                            src={student.image}
                            alt={student.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                        <div>
                          <h6 className="leading-none text-heading font-semibold">
                            <Link href="#">{student.name}</Link>
                          </h6>
                          <p className="font-spline_sans text-sm font-light mt-1">
                            {student.role}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{student.email}</td>
                    <td className="px-4 py-4">{student.phone}</td>
                    <td className="px-4 py-4">{student.country}</td>
                    <td className="px-4 py-4">{student.courses}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href="/admin/create-student"
                          className="btn-icon btn-primary-icon-light size-7"
                        >
                          <i className="ri-edit-2-line text-inherit text-[13px]"></i>
                        </Link>
                        <button
                          className="btn-icon btn-danger-icon-light size-7"
                          data-modal-target="deleteModal"
                          data-modal-toggle="deleteModal"
                        >
                          <i className="ri-delete-bin-line text-inherit text-[13px]"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* End All Student List Table */}
      </div>
    </div>
  );
};

export default AllStudent;
