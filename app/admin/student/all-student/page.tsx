"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStudentList } from "@/utils/apis/getStudent";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axiosInstance from "@/utils/axios";

const AllStudent = () => {
  const [limit, setLimit] = useState(10);
  const [selectedPage, setSelectedPage] = useState<any>(1);
  const { data, isFetching, isFetched, refetch } = useStudentList(
    limit,
    selectedPage
  );

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this student?")) {
      try {
        await axiosInstance.delete(`/student/${id}`);
        toast({
          title: "Student deleted successfully",
          description: "The student has been removed from the system",
        });
        refetch(); // Refresh the list using React Query's refetch
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error deleting student",
          description: error.response?.data?.message || "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[16px] group-data-[sidebar-size=sm]:xl:ml-[16px] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
      <div className="card p-0 lg:min-h-[calc(100vh_-_theme('spacing.header')_*_1.4)] xl:min-h-[calc(100vh_-_theme('spacing.header')_*_1.6)]">
        <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-shade">
          <div>
            <h6 className="card-title">Student list</h6>
            <p className="card-description">All Students Here</p>
          </div>
          <Link
            href="/admin/student/create-student"
            className="btn b-solid btn-primary-solid"
          >
            Add Student
          </Link>
        </div>
        {/* Start All Student List Table */}
        <div className="p-3 sm:p-4">
          <div className="overflow-x-auto scrollbar-table">
            {isFetching ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <table className="table-auto w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text leading-none">
                <thead className="border-b border-gray-200 dark:border-dark-border font-semibold">
                  <tr>
                    <th className="px-4 py-4">Student</th>
                    <th className="px-4 py-4">Email</th>
                    <th className="px-4 py-4">Phone</th>
                    <th className="px-4 py-4">Address</th>
                    <th className="px-4 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                  {data?.data?.length > 0 ? (
                    data.data.map((student: any) => (
                      <tr
                        key={student._id}
                        className="hover:bg-primary-200/50 dark:hover:bg-dark-icon hover:text-gray-500 dark:hover:text-white"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3.5">
                            <Link
                              href={`/admin/student/${student._id}`}
                              className="size-12 rounded-50 overflow-hidden dk-theme-card-square"
                            >
                              <Image
                                src={
                                  student.profile_picture ||
                                  "/assets/images/student/student-1.png"
                                }
                                alt={student.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </Link>
                            <div>
                              <h6 className="leading-none text-heading font-semibold">
                                <Link href={`/admin/student/${student._id}`}>
                                  {student.name}
                                </Link>
                              </h6>
                              <p className="font-spline_sans text-sm font-light mt-1">
                                {student.role}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">{student.email || "N/A"}</td>
                        <td className="px-4 py-4">{student.phone}</td>
                        <td className="px-4 py-4">
                          {student.address || "N/A"}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/admin/student/create-student?id=${student._id}`}
                              className="btn-icon btn-primary-icon-light size-7"
                            >
                              <Pencil className="h-4 w-4" />
                            </Link>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="btn-icon btn-danger-icon-light size-7"
                              onClick={() => handleDelete(student._id)}
                            >
                              <Trash2 className="h-4 w-4 text-danger" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center">
                        No students found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {/* End All Student List Table */}
      </div>
    </div>
  );
};

export default AllStudent;
