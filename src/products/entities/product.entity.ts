import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id : number


    @Column('text',{
        unique: true,
    })
    title: string

    @Column('float',{
        default: 0,
    })
    price: number
    
    @Column('text',{
        nullable: true
    })
    description: string


    @Column('text')
    main_image: string

    @Column('text',{
        array: true,
        default: '{}'
    })
    gallery_images: string[]



}
