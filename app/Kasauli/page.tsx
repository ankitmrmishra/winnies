"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Cloud, Droplet, Snowflake, Wind, Train, Car } from "lucide-react";

import { motion } from "framer-motion";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

import Image from "next/image";

import { BsAirplane } from "react-icons/bs";
import { ParallexImagecard } from "./ParallexImagecard";
import { FocusCardsComponent } from "./FocusCardsComponent";

export default function KasauliPage() {
  return (
    <div className="min-h-screen  md:p-20">
      <main>
        {/* Hero Section */}
        <section className="relative h-[100vh]">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2070"
            alt="Scenic view of Kasauli"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to Kasauli</h1>
              <p className="text-xl mb-8">
                Discover the picturesque hill station of Himachal Pradesh
              </p>
              <Button
                size="lg"
                className="text-white border-white bg-emerald-800 hover:bg-white hover:text-black"
              >
                Explore Kasauli
              </Button>
            </div>
          </div>
        </section>

        {/* About Kasauli Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10`}
            >
              About Kasauli
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4 text-xl">
                  Kasauli is a small, beautiful hill station in Himachal
                  Pradesh, located 77 km from Shimla at an altitude of 1,927
                  meters above sea level. Built in the 19th century by the
                  British, Kasauli retains its colonial charm and is known for
                  its picturesque landscapes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xl">
                  Surrounded by lush pine forests and orchards, Kasauli offers
                  breathtaking views of the Dhauladhar ranges and the plains of
                  Punjab and Haryana. The town is famous for its serene
                  atmosphere, making it a perfect getaway for nature lovers and
                  those seeking tranquility.
                </p>
              </div>
              <ParallexImagecard />
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section id="attractions" className="py-16">
          <div className="container mx-auto px-4">
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-6`}
            >
              Top Attractions in Kasauli
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl p-6 bg-gray-50 relative group hover:cursor-pointer h-96">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:z-40 rounded-2xl" />
                <h3 className="text-xl text-white hidden group-hover:block font-semibold mb-4 absolute z-40">
                  Monkey Point
                </h3>

                <Image
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800"
                  alt="Monkey Point in Kasauli"
                  fill
                  className="object-cover   h-96 rounded-2xl"
                />
                <p className="text-xl text-white hidden group-hover:block font-semibold mb-4 absolute z-40 bottom-0">
                  The highest point in Kasauli, offering panoramic views of
                  Chandigarh and Kalka. It&apos;s especially beautiful during
                  sunset.
                </p>
              </div>
              <div className="rounded-2xl p-6 bg-gray-50 relative group hover:cursor-pointer h-96">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:z-40 rounded-2xl" />
                <h3 className="text-xl text-white hidden group-hover:block font-semibold mb-4 absolute z-40">
                  Christ Church
                </h3>
                <Image
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=800"
                  alt="Christ Church in Kasauli"
                  fill
                  className="rounded-xl w-full aspect-4/3 object-cover mb-4"
                />
                <p className="text-xl text-white hidden group-hover:block font-semibold mb-4 absolute z-40 bottom-0">
                  A beautiful Anglican church built in 1844, featuring stained
                  glass windows and a clock tower.
                </p>
              </div>
              <div className="rounded-2xl p-6 bg-gray-50 relative group hover:cursor-pointer h-96 ">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:z-40 rounded-2xl" />
                <h3 className="text-xl text-white hidden group-hover:block font-semibold mb-4 absolute z-40">
                  Sunset Point
                </h3>
                <Image
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d"
                  alt="Sunset Point in Kasauli"
                  fill
                  className="rounded-xl w-full aspect-4/3 object-cover mb-4"
                />
                <p className="text-xl text-white hidden group-hover:block font-semibold mb-4 absolute z-40 bottom-0">
                  A popular spot to watch the sun set over the Dhauladhar
                  ranges, offering breathtaking views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Section */}
        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-6`}
            >
              Kasauli Weather
            </h2>

            <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8 ">
                <TabsTrigger className=" text-emerald-900" value="overview">
                  Overview
                </TabsTrigger>
                <TabsTrigger className=" text-emerald-900" value="summer">
                  Summer
                </TabsTrigger>
                <TabsTrigger className=" text-emerald-900" value="monsoon">
                  Monsoon
                </TabsTrigger>
                <TabsTrigger className=" text-emerald-900" value="winter">
                  Winter
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center overflow-hidden">
                  <div className="backdrop-blur-sm bg-white/90 h-full">
                    <CardHeader>
                      <CardTitle
                        className={`text-2xl text-emerald-800 ${playfair.className} italic`}
                      >
                        Weather Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="text-gray-600 text-lg">
                          Kasauli enjoys a moderate climate throughout the year,
                          making it a year-round destination. The weather is
                          generally pleasant, with temperatures rarely reaching
                          extremes.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 text-white">
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Sun className="w-10 h-10 text-yellow-500" />
                            <div>
                              <p className="font-medium">Annual Temperature</p>
                              <p className="text-white">12°C to 28°C</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Wind className="w-10 h-10 text-blue-500" />
                            <div>
                              <p className="font-medium">Pleasant Climate</p>
                              <p className="text-white">
                                Year-round destination
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="summer">
                <Card className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center overflow-hidden">
                  <div className="backdrop-blur-sm bg-white/90 h-full">
                    <CardHeader>
                      <CardTitle
                        className={`text-2xl text-emerald-800 ${playfair.className} italic`}
                      >
                        Summer (April to June)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="text-gray-600 text-lg">
                          Summers in Kasauli are mild and pleasant, perfect for
                          outdoor activities and sightseeing.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Sun className="w-10 h-10 text-yellow-500" />
                            <div>
                              <p className="font-medium text-white">
                                Temperature
                              </p>
                              <p className="text-white">22°C to 32°C</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Cloud className="w-10 h-10 text-gray-400" />
                            <div>
                              <p className="font-medium text-white">
                                Precipitation
                              </p>
                              <p className="text-white">
                                Occasional light showers
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="monsoon">
                <Card className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center overflow-hidden">
                  <div className="backdrop-blur-sm bg-white/90 h-full">
                    <CardHeader>
                      <CardTitle
                        className={`text-2xl text-emerald-800 ${playfair.className} italic`}
                      >
                        Monsoon (July to September)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="text-gray-600 text-lg">
                          The monsoon season brings moderate rainfall, turning
                          the landscape lush and green.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Droplet className="w-10 h-10 text-blue-500" />
                            <div>
                              <p className="font-medium text-white">Rainfall</p>
                              <p className="text-white">Moderate to heavy</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Sun className="w-10 h-10 text-yellow-500" />
                            <div>
                              <p className="font-medium text-white">
                                Temperature
                              </p>
                              <p className="text-white">15°C to 25°C</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="winter">
                <Card className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center overflow-hidden">
                  <div className="backdrop-blur-sm bg-white/90 h-full">
                    <CardHeader>
                      <CardTitle
                        className={`text-2xl text-emerald-800 ${playfair.className} italic`}
                      >
                        Winter (October to March)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="text-gray-600 text-lg">
                          Winters are cold with occasional snowfall, offering a
                          picturesque view of the snow-capped mountains.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Snowflake className="w-10 h-10 text-blue-400" />
                            <div>
                              <p className="font-medium text-white">
                                Temperature
                              </p>
                              <p className="text-white">4°C to 15°C</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-lg shadow-sm">
                            <Cloud className="w-10 h-10 text-white" />
                            <div>
                              <p className="font-medium text-white">Snowfall</p>
                              <p className="text-white">December and January</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="md:py-16 ">
          <div className=" mx-auto px-4 ">
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-3`}
            >
              Best Time to Visit
            </h2>
            <div className=" mx-auto">
              <Card className="bg-transparent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="py-6 text-center flex justify-center align-middle items-center flex-col w-full">
                      <h3
                        className={`md:text-4xl text-2xl italic mb-2 ${playfair.className} text-emerald-800 flex`}
                      >
                        April to June and September to November
                      </h3>
                      <p className="text-gray-600 md:w-[40rem]">
                        The best time to visit Kasauli is during the spring
                        (April to June) and autumn (September to November)
                        seasons. During these months, the weather is pleasant
                        and ideal for outdoor activities, sightseeing, and
                        enjoying the natural beauty of the hill station.
                      </p>
                    </div>
                  </div>
                  <FocusCardsComponent />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Reach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-3`}
            >
              How to Reach Kasauli
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800 flex justify-start align-middle items-center gap-2 `}
                  >
                    By Air <BsAirplane className="rotate-45" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The nearest airport is Chandigarh International Airport,
                    about 70 km from Kasauli. From there, you can take a taxi or
                    bus to reach Kasauli.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800 flex justify-start align-middle items-center gap-2 `}
                  >
                    By Train <Train />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The nearest railway station is Kalka, about 40 km from
                    Kasauli. Regular trains connect Kalka to major cities like
                    Delhi and Chandigarh.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800 flex justify-start align-middle items-center gap-2 `}
                  >
                    By Road <Car />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Kasauli is well-connected by road. You can drive from Delhi
                    (310 km) or take a bus from Chandigarh (65 km) or Shimla (77
                    km).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
