import { Request, Response } from "express";
import database, { IBeach } from '../Model';

class BeachesController {
    get(req: Request, res: Response) {
        database.get()
            .then(docs => {
                let beaches: IBeach[] = [];

                docs.forEach(doc => {
                    beaches.push(doc.data() as IBeach);
                });

                res.status(200).json(beaches);
            }).catch(() => res.status(500).json({ error: 'internal server error' }));

    }
}

const BeachesControllerInstance = new BeachesController();

export default BeachesControllerInstance;