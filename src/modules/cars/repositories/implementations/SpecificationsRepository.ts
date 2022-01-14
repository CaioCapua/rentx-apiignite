import { Specification } from "../../entities/Specification";
import {
    ICreateSpecification,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecification): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }
    list(): Specification[] {
        return this.specifications;
    }
    findByName(name: string): Specification {
        const findSpecificationByName = this.specifications.find(
            (specification) => specification.name === name
        );

        return findSpecificationByName;
    }
}

export { SpecificationsRepository };
