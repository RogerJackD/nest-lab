import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class FileSizeValidationPipe implements PipeTransform {

    constructor( 
        private readonly maxSizeMb : number
    ){}

    transform(file: Express.Multer.File , metadata: ArgumentMetadata) {

        if( !file )
            throw new BadRequestException(' no file recived ');
        

        const maxSizeBytes = this.maxSizeMb * 1024 * 1024;

        if( file.size > maxSizeBytes )
            throw new BadRequestException(`file max size is ${ this.maxSizeMb } mb`);

        return file;
    }
}