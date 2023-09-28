import getQuizData from "@/data/quiz.server";
import { NextApiRequest, NextApiResponse } from "next";

const handleGetRequest = async (req: NextApiRequest) => {
  if (req.method !== "GET") {
    throw new Error(`INVALID_REQUEST_METHOD`);
  }
};

type TErrorResponse = {
  error: {
    code: number | string | undefined;
    message: string | undefined;
    stack: string | undefined;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TErrorResponse | string | unknown>
) {
  try {
    await handleGetRequest(req);
    res.status(200).json({
      quizzes: getQuizData(),
    });
  } catch (err: any) {
    if (err?.message === "INVALID_REQUEST_METHOD") {
      res.status(404).send("INVALID REQUEST");
    } else {
      res.status(518).json({
        error: {
          code: err?.code,
          message: err?.message,
          stack: err?.stack,
        },
      });
    }
  }
}
