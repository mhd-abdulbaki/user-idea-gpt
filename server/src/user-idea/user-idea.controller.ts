import { Request, Response } from "express";
import OpenAI from "openai";
import { UserIdea } from "./user-idea.model";

interface IUserInput {
  websiteName: string;
  websiteDescription: string;
  target: string;
}

interface IUsersIdeasParams {
  page?: number;
  limit?: number;
}

interface Message {
  role: string;
  content: string | null;
}

interface Choice {
  message: Message;
}

interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
}

export const createOne = async (
  // eslint-disable-next-line @typescript-eslint/ban-types
  req: Request<{}, {}, IUserInput>,
  res: Response
) => {
  const { websiteName, websiteDescription, target } = req.body;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stream: ChatCompletionResponse = await openai.chat.completions.create(
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a knowledgeable assistant that provides quality information about Islamic content,
             users will enter their ideas about the site with 3 main fields (Website name, Website Description, Target user).
            Then you will generate the Islamic content, The final output should be different based on different user entries. the output should be as HTML without html and head tags, with tailwindcss style for light and dark mode`,
          },
          {
            role: "user",
            content: `
                   Website name: ${websiteName}
                   Website Description: ${websiteDescription}
                   Target user:${target}
          `,
          },
        ],
      }
    );
    const newUserIdea = await UserIdea.create({
      websiteName: websiteName,
      websiteDescription: websiteDescription,
      target: target,
      contents: stream.choices[0].message.content,
    });

    res.status(201).json({
      status: "success",
      data: {
        data: newUserIdea,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

export const findAll = async (
  // eslint-disable-next-line @typescript-eslint/ban-types
  req: Request,
  res: Response
) => {
  const { page = 1, limit = 10 } = req.query as IUsersIdeasParams;

  const skipAmount = (page - 1) * limit;

  try {
    const usersIdeas = await UserIdea.find()
      .skip(skipAmount)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: "success",
      result: usersIdeas.length,
      currentPage: page,
      data: {
        data: usersIdeas,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const userIdea = await UserIdea.findById(req.params.id);

    if (!userIdea) {
      res.status(404).json({
        status: "fail",
        message: "The user idea not found.",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          data: userIdea,
        },
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
