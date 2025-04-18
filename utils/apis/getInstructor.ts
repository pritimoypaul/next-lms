import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { buildUrl } from "../urlBuilder";

async function getInstructor(limit: number, selectedPage: number) {
  const url = buildUrl("/api/v1/faculty", {
    limit: limit,
    page: selectedPage,
    sort: "name",
  });
  try {
    const response = await axiosInstance.get(url);
    return response?.data;
  } catch (e) {
    return e;
  }
}

export const useInstructorList = (limit: number, selectedPage: number) => {
  return useQuery({
    queryKey: ["instructor-list"],
    queryFn: () => getInstructor(limit, selectedPage),
  });
}; 