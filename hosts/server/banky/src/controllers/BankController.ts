import { Request, Response } from 'express';

export interface IWithdrawRequest {
  withdraw: number;
}

export interface IWithdrawResponse {
  withdraw: number;
}

export class BankController {
  public static withdraw(req: Request, res: Response) {
    const withdrawReq: IWithdrawRequest = {
      withdraw: req.body.withdraw ? Number.parseInt(req.body.withdraw) : Number.NaN,
    };
    const withdrawRes: IWithdrawResponse = {
      withdraw: withdrawReq.withdraw,
    };

    console.log(`[${req.clientIp}]: ${withdrawReq.withdraw} BTC`);

    res.json(withdrawRes).end();
  }
}
