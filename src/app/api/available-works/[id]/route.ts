import mongoose from "@/lib/mongoose";
import {AvailableWorksModel} from "@/app/models/available-works/available-works-schema";
import {NextRequest, NextResponse} from "next/server";
import {Params} from "@/app/types/params";

export const GET = async (req: NextRequest, {params}: Params) => {
  try {
    const id = new mongoose.Types.ObjectId(params.id);

    const individualWork = await AvailableWorksModel.findById(id);

    if (individualWork) {
      return NextResponse.json(individualWork, {status: 200});
    } else {
      return NextResponse.json(
        {message: "Individual work not found"},
        {status: 404}
      );
    }
  } catch (error) {
    return NextResponse.json(
      {message: "Internal server error"},
      {status: 500}
    );
  }
};

