import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class FileExtensionValidationPipe implements PipeTransform {



    transform(file: Express.Multer.File , metadata: ArgumentMetadata) {
        const allowedExtensions : string[] = ['.jpg', '.png'];

        if( !file )
            throw new BadRequestException(' file not found ');
        
        const fileExt = extname( file.originalname );
        console.log( fileExt )
        if( !allowedExtensions.includes( fileExt ) )
            throw new BadRequestException(' file not have a valid extension ');

        return file;

            
    }
}