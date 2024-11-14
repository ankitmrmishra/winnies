import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw=" flex justify-center align middle items-center w-full h-full">
          <div tw="flex flex-col  w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span>Experience luxury in Kasauli</span>
              <span tw="text-emerald-600">
                Book your stay at Winnies Resort
              </span>
            </h2>
            <div tw="mt-8 flex md:mt-0">
              <div tw="flex rounded-md shadow">
                <a tw="flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-5 py-3 text-base font-medium text-white">
                  Book Now
                </a>
              </div>
              <div tw="ml-3 flex rounded-md shadow">
                <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-emerald-600">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
