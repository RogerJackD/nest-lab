import { ArgumentMetadata, PipeTransform } from "@nestjs/common";


export class FileSizeValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value)
        console.log({ metadata })

        return {
            hello : "world",
            ...value}
    }
}