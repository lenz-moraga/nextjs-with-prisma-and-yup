import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { courseSchema } from "@/schemas/course";

import * as Yup from "yup";

const prisma = new PrismaClient();

interface CourseRequestBody {
  courseName: string;
  description?: string;
  startDate: Date;
  endDate: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const validatedBody: CourseRequestBody = await courseSchema.validate(
        req.body,
        {
          abortEarly: false,
        }
      );

      const startDate = new Date(validatedBody.startDate);
      const endDate = new Date(validatedBody.endDate);

      const newCourse = await prisma.course.create({
        data: {
          courseName: validatedBody.courseName,
          description: validatedBody.description,
          startDate: startDate,
          endDate: endDate,
        },
      });

      res.status(201).json(newCourse);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        res.status(400).json({ errors: error.errors });
      } else {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
