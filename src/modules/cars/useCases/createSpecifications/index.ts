import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSPecificationsUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);
const createSpecificationsController = new CreateSpecificationsController(
    createSPecificationsUseCase
);

export { createSpecificationsController };
