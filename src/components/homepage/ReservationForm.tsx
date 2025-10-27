"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReservationForm = () => {
  const [dateIn, setDateIn] = useState<Date>();
  const [dateOut, setDateOut] = useState<Date>();

  return (
    <form>
      <div className="flex flex-col gap-6 mb-6">
        <div>
          <Input className="rounded-full h-12 bg-muted" placeholder="Name*" />
        </div>

        <div>
          <Input className="" placeholder="Phone number*" />
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="clean"
                variant="outline"
                data-empty={!dateIn}
                className="px-6 py-1 data-[empty=true]:text-muted-foreground justify-start text-left font-normal w-full rounded-full h-12 bg-muted hover:bg-muted focus:border-ring focus:ring-ring/50 focus:ring-[3px] text-foreground hover:text-foreground hover:border-input"
              >
                {dateIn ? (
                  format(dateIn, "PPP")
                ) : (
                  <span className="normal-case">Check in date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={dateIn} onSelect={setDateIn} />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="clean"
                variant="outline"
                data-empty={!dateOut}
                className="px-6 py-1 data-[empty=true]:text-muted-foreground justify-start text-left font-normal w-full rounded-full h-12 bg-muted hover:bg-muted focus:border-ring focus:ring-ring/50 focus:ring-[3px] text-foreground hover:text-foreground hover:border-input"
              >
                {dateOut ? (
                  format(dateOut, "PPP")
                ) : (
                  <span className="normal-case">Check out date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dateOut}
                onSelect={setDateOut}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Select>
            <SelectTrigger className="px-6 pr-3 py-1 justify-start text-left font-normal w-full rounded-full bg-muted hover:bg-muted focus:border-ring focus:ring-ring/50 focus:ring-[3px] text-foreground hover:text-foreground hover:border-input *:data-[slot=select-value]:w-full data-[size=default]:h-12">
              <SelectValue placeholder="Number of guests" />
            </SelectTrigger>

            <SelectContent>
              {["1", "2", "3", "4", "5", "5+"].map((item) => {
                return (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="rounded-full w-full" size={"xl"}>
        Make a reservation
      </Button>
    </form>
  );
};

export default ReservationForm;
