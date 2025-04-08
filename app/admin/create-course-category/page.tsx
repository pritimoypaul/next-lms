"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import ImageUpload from "next/image";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  parentCategory: z.string().optional(),
  iconPicker: z.string().optional(),
  position: z.number().optional(),
  metaTitle: z.string().optional(),
  thumbnail: z.any(),
});

const parentCategories = [
  { value: "programing", label: "Programing" },
  { value: "javascript", label: "JavaScript" },
  { value: "web-dev", label: "Web Development" },
  { value: "ui-ux", label: "UI/UX" },
];

const iconProviders = [
  { value: "remix", label: "Remix Icons" },
  { value: "lucide", label: "Lucide Icons" },
  { value: "heroicons", label: "Heroicons" },
];

const CreateCourseCategory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      parentCategory: "",
      iconPicker: "",
      position: undefined,
      metaTitle: "",
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write your meta description here...",
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[200px] p-2",
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[16px] group-data-[sidebar-size=sm]:xl:ml-[16px] px-4 group-data-[theme-width=box]:xl:px-0 ac-transition">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-full lg:col-span-7 card p-4 lg:p-6">
            <div className="p-1.5">
              <h6 className="card-title">Add New Category</h6>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 mt-7 pt-0.5">
                <div className="col-span-full xl:col-auto space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="Category Title"
                    {...form.register("title")}
                  />
                  {form.formState.errors.title && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.title.message}
                    </p>
                  )}
                </div>
                <div className="col-span-full xl:col-auto space-y-2">
                  <Label>Parent Category</Label>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("parentCategory", value)
                    }
                    defaultValue={form.getValues("parentCategory")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select none for parent" />
                    </SelectTrigger>
                    <SelectContent>
                      {parentCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-full xl:col-auto space-y-2">
                  <Label>Icon Picker</Label>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("iconPicker", value)
                    }
                    defaultValue={form.getValues("iconPicker")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Icon provider" />
                    </SelectTrigger>
                    <SelectContent>
                      {iconProviders.map((provider) => (
                        <SelectItem key={provider.value} value={provider.value}>
                          {provider.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-full xl:col-auto space-y-2">
                  <Label htmlFor="position">Category Position</Label>
                  <Input
                    id="position"
                    type="number"
                    placeholder="Enter Position"
                    {...form.register("position", { valueAsNumber: true })}
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    placeholder="Enter meta title"
                    {...form.register("metaTitle")}
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <Label>Meta Description</Label>
                  <div className="border rounded-md overflow-hidden">
                    <div className="border-b p-2 flex gap-2 flex-wrap bg-gray-50">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          editor.chain().focus().toggleBold().run()
                        }
                        className={editor.isActive("bold") ? "bg-gray-200" : ""}
                      >
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          editor.chain().focus().toggleItalic().run()
                        }
                        className={
                          editor.isActive("italic") ? "bg-gray-200" : ""
                        }
                      >
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          editor.chain().focus().toggleStrike().run()
                        }
                        className={
                          editor.isActive("strike") ? "bg-gray-200" : ""
                        }
                      >
                        <Strikethrough className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          editor.chain().focus().toggleBulletList().run()
                        }
                        className={
                          editor.isActive("bulletList") ? "bg-gray-200" : ""
                        }
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          editor.chain().focus().toggleOrderedList().run()
                        }
                        className={
                          editor.isActive("orderedList") ? "bg-gray-200" : ""
                        }
                      >
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          editor.chain().focus().toggleBlockquote().run()
                        }
                        className={
                          editor.isActive("blockquote") ? "bg-gray-200" : ""
                        }
                      >
                        <Quote className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                      >
                        <Undo className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                      >
                        <Redo className="h-4 w-4" />
                      </Button>
                    </div>
                    <EditorContent editor={editor} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 card p-4 lg:p-6">
            <div className="p-1.5">
              <h6 className="card-title">Add media files</h6>
              <div className="mt-7 pt-0.5">
                <p className="text-xs text-gray-500 dark:text-dark-text-two leading-none font-semibold mb-3">
                  Thumbnail (548x234)
                </p>
                <label
                  htmlFor="thumbnail"
                  className="file-container ac-bg text-xs leading-none font-semibold mb-3 cursor-pointer aspect-[4/1.5] flex flex-col items-center justify-center gap-2.5 border border-dashed border-gray-900 dark:border-dark-border-four rounded-10 dk-theme-card-square"
                >
                  <input
                    type="file"
                    id="thumbnail"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        form.setValue("thumbnail", file);
                      }
                    }}
                  />
                  <div className="flex-center flex-col">
                    <div className="size-10 lg:size-15 flex-center bg-primary-200 dark:bg-dark-icon rounded-50">
                      <ImageUpload
                        src="/assets/images/icons/upload-file.svg"
                        alt="icon"
                        className="dark:brightness-200 dark:contrast-100 w-1/2 lg:w-auto"
                        height={25}
                        width={25}
                      />
                    </div>
                    <span className="mt-2 text-gray-500 dark:text-dark-text">
                      Choose file
                    </span>
                  </div>
                </label>
              </div>
              <Button type="submit" className="mt-4">
                Next
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCourseCategory;
