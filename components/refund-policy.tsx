import { CheckCircle2, MinusCircle, XCircle, Info } from "lucide-react";

export function RefundPolicy() {
  return (
    <section className="py-12 px-4 md:px-8 w-full max-w-4xl mx-auto bg-white/50 rounded-3xl border border-emerald-100/50 my-12 font-sans">
      <div className="flex items-start gap-3 mb-10">
        <div className="w-1.5 h-8 bg-pink-400 rounded-full" />
        <h2 className="text-3xl font-bold text-gray-900">
          Rules and Refund Policy
        </h2>
      </div>

      <div className="relative space-y-12 mb-12 ml-4">
        {/* Timeline Line */}
        <div className="absolute left-[15px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-300" />

        {/* 100% Refund */}
        <div className="relative flex gap-6 items-start">
          <div className="z-10 bg-white rounded-full">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 fill-emerald-50" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              100% Future Stay Voucher / 100% Refund
            </h3>
            <p className="text-gray-500">Before 12 days</p>
          </div>
        </div>

        {/* 50% Refund */}
        <div className="relative flex gap-6 items-start">
          <div className="z-10 bg-white rounded-full">
            <MinusCircle className="w-8 h-8 text-amber-500 fill-amber-50" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              50% Future Stay Voucher / Refund
            </h3>
            <p className="text-gray-500">6 to 12 days</p>
          </div>
        </div>

        {/* No Refund */}
        <div className="relative flex gap-6 items-start">
          <div className="z-10 bg-white rounded-full">
            <XCircle className="w-8 h-8 text-pink-500 fill-pink-50" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">No Refund</h3>
            <p className="text-gray-500">Less than 6 days</p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-4 mb-8">
        <Button
          variant="outline"
          className="bg-[#E9F0FE] hover:bg-[#D8E6FD] text-gray-900 border-none rounded-xl px-8 py-6 h-auto font-medium"
        >
          Refund Policy
        </Button>
        <Button
          variant="outline"
          className="bg-[#E9F0FE] hover:bg-[#D8E6FD] text-gray-900 border-none rounded-xl px-8 py-6 h-auto font-medium"
        >
          Home Rules and Policy
        </Button>
      </div> */}

      <div className="space-y-4 pt-4 border-t border-gray-100">
        <p className="text-gray-900 font-medium">
          Check-in time: <span className="font-bold">2:00 PM</span>, Check-out
          time: <span className="font-bold">11:00 AM</span>
        </p>
        <div className="flex gap-2 text-gray-600 text-sm italic">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>
            Early check-in and late check-out is subject to availability (at an
            additional fee)
          </p>
        </div>
      </div>
    </section>
  );
}
