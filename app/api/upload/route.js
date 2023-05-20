import { NextResponse } from "next/server";

export async function POST(req,res){
    console.log(req.body);
      return NextResponse.json(req.body);
}

export async function GET(req,res){
    console.log("Hello world");
}