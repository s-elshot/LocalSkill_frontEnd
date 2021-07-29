import http from "../helper/http-commons"

class FileUploadService {

    createProductList(listName) {

        let picture = new picture();

        picture.append('picture', picture)

        return http.post('file/upload')
    }


    getProductList() {
        return http.get('/files')
    }


}

export default FileUploadService;