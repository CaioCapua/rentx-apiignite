/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICreateRepository,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateRepository): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const repositories = await this.repository.find();

        return repositories;
    }

    async findByName(name: string): Promise<Category> {
        const verifyIfCategoryExists = await this.repository.findOne(name);

        return verifyIfCategoryExists;
    }
}

export { CategoriesRepository };
