"use client";

import { motion } from "motion/react";
import {
  Ruler,
  Users,
  Shirt,
  Footprints,
  Watch,
  Heart,
  Info,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Calculator,
} from "lucide-react";
import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";

const SizeGuidePage = () => {
  const clothingSizes = {
    women: [
      { size: "XS", chest: "32-34", waist: "24-26", hips: "34-36", uk: "6", eu: "34" },
      { size: "S", chest: "34-36", waist: "26-28", hips: "36-38", uk: "8", eu: "36" },
      { size: "M", chest: "36-38", waist: "28-30", hips: "38-40", uk: "10", eu: "38" },
      { size: "L", chest: "38-40", waist: "30-32", hips: "40-42", uk: "12", eu: "40" },
      { size: "XL", chest: "40-42", waist: "32-34", hips: "42-44", uk: "14", eu: "42" },
      { size: "XXL", chest: "42-44", waist: "34-36", hips: "44-46", uk: "16", eu: "44" },
    ],
    men: [
      { size: "XS", chest: "34-36", waist: "28-30", uk: "34", eu: "44" },
      { size: "S", chest: "36-38", waist: "30-32", uk: "36", eu: "46" },
      { size: "M", chest: "38-40", waist: "32-34", uk: "38", eu: "48" },
      { size: "L", chest: "40-42", waist: "34-36", uk: "40", eu: "50" },
      { size: "XL", chest: "42-44", waist: "36-38", uk: "42", eu: "52" },
      { size: "XXL", chest: "44-46", waist: "38-40", uk: "44", eu: "54" },
    ],
  };

  const shoeSizes = {
    women: [
      { us: "5", uk: "2.5", eu: "35", cm: "22.0" },
      { us: "5.5", uk: "3", eu: "35.5", cm: "22.5" },
      { us: "6", uk: "3.5", eu: "36", cm: "23.0" },
      { us: "6.5", uk: "4", eu: "37", cm: "23.5" },
      { us: "7", uk: "4.5", eu: "37.5", cm: "24.0" },
      { us: "7.5", uk: "5", eu: "38", cm: "24.5" },
      { us: "8", uk: "5.5", eu: "39", cm: "25.0" },
      { us: "8.5", uk: "6", eu: "39.5", cm: "25.5" },
      { us: "9", uk: "6.5", eu: "40", cm: "26.0" },
      { us: "9.5", uk: "7", eu: "41", cm: "26.5" },
      { us: "10", uk: "7.5", eu: "41.5", cm: "27.0" },
    ],
    men: [
      { us: "6", uk: "5.5", eu: "39", cm: "24.0" },
      { us: "6.5", uk: "6", eu: "39.5", cm: "24.5" },
      { us: "7", uk: "6.5", eu: "40", cm: "25.0" },
      { us: "7.5", uk: "7", eu: "40.5", cm: "25.5" },
      { us: "8", uk: "7.5", eu: "41", cm: "26.0" },
      { us: "8.5", uk: "8", eu: "42", cm: "26.5" },
      { us: "9", uk: "8.5", eu: "42.5", cm: "27.0" },
      { us: "9.5", uk: "9", eu: "43", cm: "27.5" },
      { us: "10", uk: "9.5", eu: "44", cm: "28.0" },
      { us: "10.5", uk: "10", eu: "44.5", cm: "28.5" },
      { us: "11", uk: "10.5", eu: "45", cm: "29.0" },
      { us: "12", uk: "11.5", eu: "46", cm: "30.0" },
    ],
  };

  const measurementTips = [
    {
      title: "Chest/Bust Measurement",
      icon: Shirt,
      description: "Measure around the fullest part of your chest/bust, keeping the tape parallel to the floor.",
      tips: [
        "Wear a well-fitting bra for accurate bust measurement",
        "Keep the measuring tape snug but not tight",
        "Breathe normally and don't hold your breath",
        "Take the measurement at the end of a normal exhale",
      ],
    },
    {
      title: "Waist Measurement",
      icon: Calculator,
      description: "Measure around your natural waistline, which is typically the narrowest part of your torso.",
      tips: [
        "Find your natural waist by bending to one side",
        "Don't suck in your stomach",
        "Keep one finger between the tape and your body",
        "Measure over light clothing or undergarments",
      ],
    },
    {
      title: "Hip Measurement",
      icon: Users,
      description: "Measure around the fullest part of your hips, usually about 7-9 inches below your waist.",
      tips: [
        "Stand with feet together",
        "Measure around the widest part of your hips",
        "Keep the tape parallel to the floor",
        "Don't pull the tape too tight",
      ],
    },
    {
      title: "Foot Measurement",
      icon: Footprints,
      description: "Measure your foot length from heel to toe for the most accurate shoe size.",
      tips: [
        "Measure feet at the end of the day when they're largest",
        "Measure both feet and use the larger measurement",
        "Stand on a piece of paper and trace your foot",
        "Measure from the longest toe to the back of the heel",
      ],
    },
  ];

  const fitGuides = [
    {
      title: "Regular Fit",
      description: "Classic, comfortable fit with room to move",
      icon: CheckCircle,
      color: "text-shop_dark_green",
      bgColor: "bg-shop_dark_green/10",
      characteristics: [
        "Relaxed through chest and waist",
        "Standard sleeve and body length",
        "Comfortable for everyday wear",
        "Not too tight or too loose",
      ],
    },
    {
      title: "Slim Fit",
      description: "Tailored closer to the body for a modern look",
      icon: Shirt,
      color: "text-shop_light_green",
      bgColor: "bg-shop_light_green/10",
      characteristics: [
        "Fitted through chest and waist",
        "Tapered sleeves and body",
        "Contemporary, streamlined silhouette",
        "Less room than regular fit",
      ],
    },
    {
      title: "Relaxed Fit",
      description: "Loose, comfortable fit with extra room",
      icon: Users,
      color: "text-shop_orange",
      bgColor: "bg-shop_orange/10",
      characteristics: [
        "Generous cut through chest and waist",
        "Extra room for layering",
        "Comfortable for active wear",
        "Casual, laid-back style",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-shop_light_bg to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Ruler className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Size Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find your perfect fit with our comprehensive size guide. Get
              accurate measurements and sizing information for all our products.
            </p>
            <Badge className="mt-6 bg-white/20 text-white border-white/30">
              Free exchanges on all sizes
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Size Charts */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
              Size Charts
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Clothing & Shoe Sizes
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Use our detailed size charts to find your perfect fit. All
              measurements are in inches unless otherwise specified.
            </p>
          </motion.div>

          <Tabs defaultValue="clothing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="clothing" className="flex items-center gap-2">
                <Shirt className="w-4 h-4" />
                Clothing
              </TabsTrigger>
              <TabsTrigger value="shoes" className="flex items-center gap-2">
                <Footprints className="w-4 h-4" />
                Shoes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clothing">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Women's Clothing */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-shop_dark_green">
                        <Heart className="w-5 h-5 text-shop_light_green" />
                        Women's Clothing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Size</TableHead>
                              <TableHead>Chest</TableHead>
                              <TableHead>Waist</TableHead>
                              <TableHead>Hips</TableHead>
                              <TableHead>UK</TableHead>
                              <TableHead>EU</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {clothingSizes.women.map((size, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{size.size}</TableCell>
                                <TableCell>{size.chest}"</TableCell>
                                <TableCell>{size.waist}"</TableCell>
                                <TableCell>{size.hips}"</TableCell>
                                <TableCell>{size.uk}</TableCell>
                                <TableCell>{size.eu}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Men's Clothing */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-shop_dark_green">
                        <Users className="w-5 h-5 text-shop_light_green" />
                        Men's Clothing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Size</TableHead>
                              <TableHead>Chest</TableHead>
                              <TableHead>Waist</TableHead>
                              <TableHead>UK</TableHead>
                              <TableHead>EU</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {clothingSizes.men.map((size, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{size.size}</TableCell>
                                <TableCell>{size.chest}"</TableCell>
                                <TableCell>{size.waist}"</TableCell>
                                <TableCell>{size.uk}</TableCell>
                                <TableCell>{size.eu}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="shoes">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Women's Shoes */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-shop_dark_green">
                        <Heart className="w-5 h-5 text-shop_light_green" />
                        Women's Shoes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>US</TableHead>
                              <TableHead>UK</TableHead>
                              <TableHead>EU</TableHead>
                              <TableHead>CM</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {shoeSizes.women.map((size, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{size.us}</TableCell>
                                <TableCell>{size.uk}</TableCell>
                                <TableCell>{size.eu}</TableCell>
                                <TableCell>{size.cm}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Men's Shoes */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-shop_dark_green">
                        <Users className="w-5 h-5 text-shop_light_green" />
                        Men's Shoes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>US</TableHead>
                              <TableHead>UK</TableHead>
                              <TableHead>EU</TableHead>
                              <TableHead>CM</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {shoeSizes.men.map((size, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{size.us}</TableCell>
                                <TableCell>{size.uk}</TableCell>
                                <TableCell>{size.eu}</TableCell>
                                <TableCell>{size.cm}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </section>

      {/* Measurement Tips */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_orange/10 text-shop_orange hover:bg-shop_orange/20">
              How to Measure
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Measurement Tips
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Get accurate measurements with these helpful tips and techniques
              for the best possible fit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {measurementTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-shop_dark_green">
                        <div className="p-2 bg-shop_light_green/10 rounded-lg">
                          <Icon className="w-5 h-5 text-shop_light_green" />
                        </div>
                        {tip.title}
                      </CardTitle>
                      <p className="text-dark-text">{tip.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tip.tips.map((tipItem, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-shop_light_green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-dark-text">{tipItem}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Fit Guides */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Fit Guides
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Understanding different fit types to help you choose the style
              that's right for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {fitGuides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all group">
                    <CardHeader>
                      <div className={`p-4 ${guide.bgColor} rounded-full w-fit mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${guide.color}`} />
                      </div>
                      <CardTitle className="text-shop_dark_green">
                        {guide.title}
                      </CardTitle>
                      <p className="text-dark-text">{guide.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-left">
                        {guide.characteristics.map((char, charIndex) => (
                          <li key={charIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-dark-text">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mobile App CTA */}
      <section className="py-16 bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Still Not Sure About Your Size?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't worry! We offer free exchanges on all items, and our
              customer service team is here to help you find the perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-shop_dark_green hover:bg-white/90"
              >
                <Link href="/contact">
                  Get Size Help <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/returns">
                  Exchange Policy
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Free exchanges • Easy returns • Expert sizing help
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Important Notice */}
      <section className="py-8 border-t border-gray-200">
        <Container className="max-w-4xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Info className="w-4 h-4 text-shop_light_green" />
              <p className="text-sm text-light-text">
                Sizes may vary slightly between different brands and styles
              </p>
            </div>
            <p className="text-xs text-light-text">
              When in doubt, we recommend sizing up or contacting our customer
              service team for personalized sizing advice.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SizeGuidePage;