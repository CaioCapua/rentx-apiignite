import { Category } from "../entities/Category";

// DTO -> Data transfer object
interface ICreateRepository {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description }: ICreateRepository): Promise<void>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository, ICreateRepository };
