import Image from "next/image";
import React from "react";

const CreateCourseCategory = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[16px] group-data-[sidebar-size=sm]:xl:ml-[16px] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
      {/* <!-- Start New Course Category --> */}
      <form action="#">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-full lg:col-span-7 card p-4 lg:6">
            <div className="p-1.5">
              <h6 className="card-title">Add New Category</h6>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 mt-7 pt-0.5">
                <div className="col-span-full xl:col-auto leading-none">
                  <label htmlFor="categoryTitle" className="form-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="categoryTitle"
                    placeholder="Category Title"
                    className="form-input"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-span-full xl:col-auto leading-none">
                  <label className="form-label">Parent Category</label>
                  <select className="singleSelect" name="category">
                    <option selected disabled>
                      Select none for parent
                    </option>
                    <option value="programing">Programing</option>
                    <option value="javascript">JavaScript</option>
                    <option value="web-dev">Web Development</option>
                    <option value="ui-ux">UI/UX</option>
                  </select>
                </div>
                <div className="col-span-full xl:col-auto leading-none">
                  <label className="form-label">Icon Picker</label>
                  <select className="singleSelect" name="icon-picker">
                    <option selected disabled>
                      Icon provider
                    </option>
                  </select>
                </div>
                <div className="col-span-full xl:col-auto leading-none">
                  <label htmlFor="position" className="form-label">
                    Category Position
                  </label>
                  <input
                    type="number"
                    id="position"
                    placeholder="Enter Position"
                    className="form-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-span-full leading-none">
                  <label htmlFor="metatitle" className="form-label">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    id="metatitle"
                    placeholder="Enter meta title"
                    className="form-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-span-full leading-none">
                  <label className="form-label">Meta Description</label>
                  <textarea className="summernote"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 card p-4 lg:6">
            <div className="p-1.5">
              <h6 className="card-title">Add media files</h6>
              <div className="mt-7 pt-0.5">
                <p className="text-xs text-gray-500 dark:text-dark-text-two leading-none font-semibold mb-3">
                  Thumbnail (548x234)
                </p>
                <label
                  htmlFor="thumbnailsrc"
                  className="file-container ac-bg text-xs leading-none font-semibold mb-3 cursor-pointer aspect-[4/1.5] flex flex-col items-center justify-center gap-2.5 border border-dashed border-gray-900 dark:border-dark-border-four rounded-10 dk-theme-card-square"
                >
                  <input
                    type="file"
                    id="thumbnailsrc"
                    hidden
                    className="img-src peer/file"
                  />
                  <span className="flex-center flex-col peer-[.uploaded]/file:hidden">
                    <span className="size-10 lg:size-15 flex-center bg-primary-200 dark:bg-dark-icon rounded-50">
                      <Image
                        src="/assets/images/icons/upload-file.svg"
                        alt="icon"
                        className="dark:brightness-200 dark:contrast-100 w-1/2 lg:w-auto"
                        height={25}
                        width={25}
                      />
                    </span>
                    <span className="mt-2 text-gray-500 dark:text-dark-text">
                      Choose file
                    </span>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid btn-lg w-max"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <!-- End New Course Category --> */}
    </div>
  );
};

export default CreateCourseCategory;
