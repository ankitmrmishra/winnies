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
    <div className="min-h-screen  ">
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
              <h1 className="text-5xl font-bold mb-4 ">
                Begin Your Journey in Kasauli
              </h1>
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
        <section id="about" className="py-16 md:px-20">
          <div className="container mx-auto px-4">
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10`}
            >
              About Kasauli
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4 text-xl">
                  Set in the misty hills of Himachal Pradesh, Kasauli is a
                  captivating retreat located 77 km from Shimla at an altitude
                  of 1,927 meters. Founded by the British in the 19th century,
                  it retains colonial charm with cobbled streets and historic
                  architecture. Surrounded by pine forests, Kasauli offers
                  stunning views of the Dhauladhar ranges and plains.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-xl">
                  Kasauli is not just a destination, but an experience for those
                  who seek tranquillity amidst nature&apos;s beauty. From scenic
                  trails that weave through dense forests to panoramic
                  viewpoints, every corner of Kasauli offers something special.
                  The town&apos;s calm pace allows for reflection, while its
                  natural charm promises a blissful escape. Whether you&apos;re
                  hiking, sightseeing, or simply relaxing in the solitude,
                  Kasauli&apos;s magical allure will captivate your heart.
                </p>
              </div>
              <ParallexImagecard />
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section id="attractions" className="py-16 md:px-20">
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
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a1/43/07/img-20170517-082248-359.jpg?w=900&h=-1&s=1"
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
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/29/f8/12/christ-church.jpg?w=1000&h=-1&s=1"
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
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e5/03/8a/caption.jpg?w=1000&h=-1&s=1"
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
              Kasauli Through Every Season
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
                          Kasauli enjoys a mild, temperate climate year-round,
                          offering a perfect escape in every season. With its
                          consistently pleasant weather and balanced
                          temperatures, the town remains an inviting retreat,
                          free from extreme conditions, for travelers seeking
                          tranquility all year long.
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
                          Summers in Kasauli are delightfully mild, with
                          temperatures that make it ideal for outdoor
                          adventures. The refreshing weather invites
                          sightseeing, hiking, and leisurely strolls through the
                          town&apos;s scenic landscapes, ensuring a memorable
                          escape.
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
                          During the monsoon season, Kasauli experiences
                          moderate rainfall that transforms the landscape into a
                          vibrant, lush paradise, with green forests and misty
                          hills enhancing the town&apos;s charm.
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
                          Winters in Kasauli are crisp and cold, with occasional
                          snowfall that blankets the town in a serene white
                          layer. The snow-capped mountains create a stunning,
                          picturesque landscape, perfect for winter enthusiasts.
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
                        Kasauli&apos;s charm shines brightest in spring (April
                        to June) and autumn (September to November). The weather
                        during these months is refreshing and mild, creating an
                        ideal atmosphere for outdoor adventures, sightseeing,
                        and soaking in the hill station&apos;s natural beauty
                        and tranquility, far from the hustle of city life
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
        <section className="py-16 md:px-20">
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
                    The nearest airport to Kasauli is Chandigarh International
                    Airport, located approximately 70 km away. From there, taxis
                    and buses are readily available for a scenic drive to the
                    hill station, ensuring a comfortable and convenient journey.
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
                    Kalka, located 40 km from Kasauli, is the nearest railway
                    station. It is well-connected to major cities like Delhi and
                    Chandigarh, with regular trains ensuring easy access to
                    Kasauli.
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
                    Kasauli is easily accessible by road, with a 310 km drive
                    from Delhi. Buses also connect the hill station from
                    Chandigarh (65 km) and Shimla (77 km), offering convenient
                    travel options.
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
