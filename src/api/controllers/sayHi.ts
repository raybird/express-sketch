import { Request, Response } from 'express';

export function sayHi(req: Request, res: Response) {

  console.log(req.query.q)
  const name = req.query.q;
  res.send({
    message: `hi ${name}`,
  });
}