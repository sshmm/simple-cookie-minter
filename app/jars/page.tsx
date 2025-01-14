import Image from "next/image";

import { JarCard } from "@/components/jar-card";
import CreateJarFormERC20 from "../../components/CreateJarFormERC20";
import type { CookieJar } from "@/lib/indexer/db";
import { ScrollArea } from "@/components/ui/scroll-area";

import cookieBackground from "@/assets/cookie-background.webp";

import { JarsQuery } from "@/lib/jars-query.graphql";
import { Card } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { cookJarMockData, data } from "./mock-data";

const fetchJars = async (): Promise<CookieJar[] | undefined> => {
  try {
    const res = await fetch(
      // TODO: update to be dynamic, use something like gql.tada for types https://gql-tada.0no.co/
      "https://api.studio.thegraph.com/query/28985/cookie-jar-testing/sepolia-2-0x4c9",
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          {
            cookieJars {
              type
              periodLength
              owner
              name
              link
              id
              description
              cookieToken
              cookieAmount
            }
          }
          `,
        }),
      },
    );
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    const jsonResponse = await res.json();

    // Check if the expected data structure is present
    if (
      !jsonResponse ||
      !jsonResponse.data ||
      !Array.isArray(jsonResponse.data.cookieJars)
    ) {
      throw new Error("Invalid response structure");
    }
    return jsonResponse.data.cookieJars;
  } catch (error) {
    // TODO: handle errors more gracefully
    return undefined;
  }
};

export default async function JarsPage() {
  const cookieJars = await fetchJars();

  if (cookieJars === undefined || cookieJars === null) {
    return (
      <div>
        <h1>Looks like there are no jars</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3x container my-8">
      <section className="relative flex w-full flex-col items-center gap-8 overflow-hidden rounded-3xl p-20">
        <div className="absolute inset-0 bg-amber-900 opacity-30" />
        {/* <section className="container relative my-8 flex w-full max-w-3xl flex-col items-center gap-8 rounded-xl bg-amber-100 bg-opacity-30 p-8"> */}
        <Image
          src={cookieBackground}
          alt="Background of cookie jars and cookies"
          className="-z-10 bg-center object-cover blur-sm"
          fill
        />
        <Card className="relative z-20 flex flex-col items-center gap-8 border-none bg-amber-100 p-8 text-center">
          <h1 className="font-gluten text-5xl font-semibold">Jars</h1>
          <ScrollArea className="h-[40rem] w-full max-w-4xl">
            <div className="flex flex-col gap-2 p-4 pt-0">
              {/* <DataTable columns={columns} data={data} /> */}
              {cookieJars.length > 0 ? (
                cookieJars.map((jar) => (
                  <JarCard key={jar.id} cookieJar={jar} />
                ))
              ) : (
                <CreateJarFormERC20 />
              )}
            </div>
          </ScrollArea>
        </Card>
      </section>
    </div>
  );
}
