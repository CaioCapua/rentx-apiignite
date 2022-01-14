import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    private listSpecificationsUseCase: ListSpecificationsUseCase;

    constructor(listSpecificationsUseCase: ListSpecificationsUseCase) {
        this.listSpecificationsUseCase = listSpecificationsUseCase;
    }

    handle(request: Request, response: Response) {
        const allSpecifications = this.listSpecificationsUseCase.execute();

        return response.status(200).json({ allSpecifications });
    }
}

export { ListSpecificationsController };
