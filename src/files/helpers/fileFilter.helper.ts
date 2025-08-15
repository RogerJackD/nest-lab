
export const fileFilter = ( req: Express.Request, file: Express.Multer.File , callback: Function ) => {

    if( !file ) return callback( new Error('file is empty'), false)
    
    const fileExtension = file.mimetype.split('/')[1];

    const validExtensions = ['jpg','png'];

    if( !validExtensions.includes( fileExtension ) ){
        return callback( new Error(`invalid extensions , file must have ${validExtensions.join(' & ')} `), false)   
    }

    return callback(null, true)

}