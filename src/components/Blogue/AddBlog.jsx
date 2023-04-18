import { useFormik } from "formik";
import React from "react";
import fClasses from "../Contact/ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
import * as yup from 'yup'

function AddBlog() {
    const addBlogSchema = yup.object().shape({
        title: yup.string().required("Required"),
        body: yup.string().required("Required").min(10, "Must be at least 10 characters"),
        author: yup.string().required("Required"),
        imgUrl: yup.string().url("Enter a valid Url").required("Required"),
        category: yup.string().required("Required"),

    })


  const { values, handleBlur, handleChange, errors, touched } = useFormik({
    initialValues: {
      id: uuidv4(),
      title: "",
      body: "",
      author: "",
      imgUrl: "",
      category: "",
    },
    validationSchema: addBlogSchema
  });

  console.log("FORM VALUES: ", values)
  console.log("FORM ERRORS: ", errors)
  return (
    <div>
      <div className={fClasses.formCon}>
        <form action="">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="Enter blog title"
            type="text"
            name=""
            id="title"
          />
          { errors.title && touched.title && <p style={{
            color: "red"
          }}>{errors.title}</p> }
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
            placeholder="Enter Author Name"
            type="text"
            name=""
            id="author"
          />
          { errors.author && touched.author && <p style={{
            color: "red"
          }}>{errors.author}</p> }

          <textarea
            name=""
            id="body"
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            placeholder="Enter Blog Body here"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}
          ></textarea>
          { errors.body && touched.body && <p style={{
            color: "red"
          }}>{errors.body}</p> }
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.imgUrl}
            placeholder="Enter Image Url"
            type="text"
            name=""
            id="imgUrl"
          />
          { errors.imgUrl && touched.imgUrl && <p style={{
            color: "red"
          }}>{errors.imgUrl}</p> }
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            placeholder="Enter Blog Category"
            type="text"
            name=""
            id="category"
          />
          { errors.category && touched.category && <p style={{
            color: "red"
          }}>{errors.category}</p> }
        </form>
        <button>ADD BLOG</button>
      </div>
    </div>
  );
}

export default AddBlog;
