import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileSizeValidationPipe } from "./pipes/fileSizeValidation.pipe";
import { FileExtensionValidationPipe } from "./pipes/fileExtensionValidation.pipe";


@Controller('files')
export class FilesController{

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile( new FileSizeValidationPipe( 1 ), new FileExtensionValidationPipe() ) file: Express.Multer.File) {
    return file
  }


}