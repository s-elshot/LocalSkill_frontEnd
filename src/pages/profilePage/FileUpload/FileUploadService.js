import http from "./http-commons";

const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify,
        item: {id: 3}
        ,
        onUploadProgress,
    });
};

const getFiles = () => {
    return http.get("/files");
};

const FileUploadService = {
    upload,
    getFiles,
};

export default FileUploadService;
