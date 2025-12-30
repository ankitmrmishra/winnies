"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export type CallbackFormHandle = {
  focus: () => void;
  scrollIntoView: (options?: ScrollIntoViewOptions) => void;
};

type Props = {
  active: boolean;
  triggerKey: number;
  onUserInteraction: () => void;
};

const variants = {
  idle: {
    x: 0,
    boxShadow: "0 0 0 0 rgba(0,0,0,0)",
  },
  shake: {
    x: [-10, 10, -8, 8, -4, 4, 0],
    boxShadow: "0 0 0 6px rgba(16,185,129,0.35)",
    transition: {
      x: { duration: 0.5 },
      boxShadow: {
        duration: 0.6,
        repeat: 2,
        repeatType: "mirror" as const,
      },
    },
  },
};

export const CallbackForm = forwardRef<CallbackFormHandle, Props>(
  ({ active, triggerKey, onUserInteraction }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const controls = useAnimationControls();
    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current?.focus();
      },
      scrollIntoView(options) {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          ...options,
        });
      },
    }));

    /* ✅ Trigger animation when active changes */
    useEffect(() => {
      if (active) {
        controls.start("shake");
      } else {
        controls.start("idle");
      }
    }, [active, triggerKey, controls]);

    return (
      <motion.div
        ref={containerRef}
        animate={controls}
        variants={variants}
        className={cn(
          "bg-white p-6 rounded-2xl shadow-2xl border w-full max-w-md",
          active ? "border-emerald-600" : "border-emerald-100"
        )}
      >
        <h3
          className={`${playfair.className} text-2xl text-emerald-800 mb-6 text-center`}
        >
          Request a Callback
        </h3>
        <form className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              ref={inputRef}
              id="name"
              placeholder="Manav Kaul"
              onChange={onUserInteraction}
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="manav@example.com"
              onChange={onUserInteraction}
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              onChange={onUserInteraction}
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Check-in Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-emerald-100",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "dd MMM") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Check-out Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-emerald-100",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "dd MMM") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Guests + Room */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Total Guests</Label>
              <Select>
                <SelectTrigger className="border-emerald-100">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, "4+"].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Room / Villa</Label>
              <Select>
                <SelectTrigger className="border-emerald-100">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="room">Room</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox checked id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the privacy policy
            </Label>
          </div>

          <Button className="w-full bg-emerald-800 hover:bg-emerald-700 text-white h-12 text-lg font-semibold">
            Submit Booking Request
          </Button>
        </form>
      </motion.div>
    );
  }
);

CallbackForm.displayName = "CallbackForm";
