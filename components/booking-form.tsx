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
import { useToast } from "@/hooks/use-toast";

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
  idle: { x: 0, boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
  shake: {
    x: [-10, 10, -8, 8, -4, 4, 0],
    boxShadow: "0 0 0 6px rgba(16,185,129,0.35)",
    transition: { x: { duration: 0.5 } },
  },
};

export const CallbackForm = forwardRef<CallbackFormHandle, Props>(
  ({ active, triggerKey, onUserInteraction }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const controls = useAnimationControls();
    const { toast } = useToast();

    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      accommodation: "",
      consent: true,
    });

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

    useEffect(() => {
      if (active) {
        controls.start("shake");
      } else {
        controls.start("idle");
      }
    }, [active, triggerKey, controls]);

    /* 🔹 Sync dates */
    useEffect(() => {
      if (checkIn)
        setFormData((p) => ({ ...p, checkIn: checkIn.toISOString() }));
    }, [checkIn]);

    useEffect(() => {
      if (checkOut)
        setFormData((p) => ({ ...p, checkOut: checkOut.toISOString() }));
    }, [checkOut]);

    /* 🔹 Prevent invalid checkout - Clear checkout if it's before check-in */
    useEffect(() => {
      if (checkIn && checkOut && checkOut <= checkIn) {
        setCheckOut(undefined);
        setFormData((p) => ({ ...p, checkOut: "" }));
        toast({
          title: "Invalid Date Selection",
          description: "Check-out date must be after check-in date.",
          variant: "destructive",
        });
      }
    }, [checkIn, checkOut, toast]);

    /* 🔹 Submit with validation */
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate required fields
      if (!formData.name || !formData.email) {
        toast({
          title: "Missing Required Fields",
          description: "Name and email are required.",
          variant: "destructive",
        });
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }

      // Validate dates if both are provided
      if (formData.checkIn && formData.checkOut) {
        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);

        if (checkOutDate <= checkInDate) {
          toast({
            title: "Invalid Dates",
            description: "Check-out date must be after check-in date.",
            variant: "destructive",
          });
          return;
        }
      }

      // Validate check-in is not in the past
      if (formData.checkIn) {
        const checkInDate = new Date(formData.checkIn);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (checkInDate < today) {
          toast({
            title: "Invalid Check-in Date",
            description: "Check-in date cannot be in the past.",
            variant: "destructive",
          });
          return;
        }
      }

      setLoading(true);

      try {
        const res = await fetch("/api/hubspot/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Submission failed");
        }

        toast({
          title: "Request sent 🎉",
          description: "Our team will contact you shortly.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "",
          accommodation: "",
          consent: true,
        });
        setCheckIn(undefined);
        setCheckOut(undefined);
      } catch (error) {
        toast({
          title: "Submission failed",
          description:
            error instanceof Error ? error.message : "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label>Full Name *</Label>
            <Input
              ref={inputRef}
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                onUserInteraction();
              }}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Email *</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Phone</Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DatePicker
              label="Check-in"
              date={checkIn}
              setDate={setCheckIn}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today;
              }}
            />
            <DatePicker
              label="Check-out"
              date={checkOut}
              setDate={setCheckOut}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (date < today) return true;
                if (checkIn) {
                  // Check-out must be at least 1 day after check-in
                  return date <= checkIn;
                }
                return false;
              }}
            />
          </div>

          <Select
            value={formData.guests}
            onValueChange={(v) => setFormData({ ...formData, guests: v })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              {["1 Guest", "2 Guests", "3 Guests", "4+ Guests"].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={formData.accommodation}
            onValueChange={(v) =>
              setFormData({ ...formData, accommodation: v })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Room / Villa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="room">Room</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={formData.consent}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, consent: checked === true })
              }
            />
            <Label>I agree to the privacy policy</Label>
          </div>

          <Button disabled={loading} className="w-full bg-emerald-600">
            {loading ? "Submitting..." : "Submit Booking Request"}
          </Button>
        </form>
      </motion.div>
    );
  }
);

CallbackForm.displayName = "CallbackForm";

/* 🔹 Date Picker */
function DatePicker({
  label,
  date,
  setDate,
  disabled,
}: {
  label: string;
  date?: Date;
  setDate: (d?: Date) => void;
  disabled?: (date: Date) => boolean;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "dd MMM") : "Pick date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
