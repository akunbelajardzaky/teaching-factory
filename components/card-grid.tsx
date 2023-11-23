import React from "react";
import { CardDefault } from "../components/card";
import { PrismaClient } from "@prisma/client";

async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return {
    props: { posts },
  };
}

async function CardGrid() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  return (
    <>
      <div>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {posts.map((post) => (
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <CardDefault
                  key={post.id}
                  image={post.image}
                  //   @ts-ignore
                  content={post.content}
                  name={post.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGrid;
