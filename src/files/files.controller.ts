import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileFilter } from "./helpers/fileFilter.helper";
import { diskStorage } from "multer";


@Controller('files')
export class FilesController{

  @Post('upload')
  @UseInterceptors(FileInterceptor('file',{
    fileFilter : fileFilter,
    storage : diskStorage({
      //destination : 'static/files',
      // filename : filenamer,
       //filename : (req, file, cb) => {
      //   const uniqueName = `${ Date.now() }-${ file.originalname }`;
      //   cb(null, uniqueName) }
    })
  }))
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file
  }
}