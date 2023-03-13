import * as Yup from 'yup';

const LibraryDTO=Yup.object().shape({
    title: Yup.string()
        .required("Book Title is required"),
    number: Yup.number()
        .required("Number of Book Amount is required")
        // .moreThan(0)
})


export {LibraryDTO}