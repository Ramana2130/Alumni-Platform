import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";
import { getDashboardCounts } from "@/services/alumniservices";
import CountUp from "react-countup";

export function SectionCards() {
  const [counts, setCounts] = useState({
    totalEvents: 0,
    totalConnections: 0,
    totalJobPostings: 0,
    totalFundDonated: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const data = await getDashboardCounts();
        setCounts(data);
      } catch {
        // handle error or keep zeros
      }
    };
    fetchCounts();
  }, []);
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold tetx-xl text-emerald-700">Total Alumni</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <CountUp end={counts.totalConnections} duration={1.5} separator="," suffix="+" />
          </CardTitle>                 
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this year <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Alumni for the last year
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold tetx-xl text-emerald-700">Fund Collected</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <CountUp end={counts.totalFundDonated} duration={1.5} separator="," suffix="+" />
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold tetx-xl text-emerald-700">Job Posting</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <CountUp end={counts.totalJobPostings} duration={1.5} separator="," suffix="+" />
          </CardTitle>
         </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold tetx-xl text-emerald-700">Event and Webinar</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <CountUp end={counts.totalEvents} duration={1.5} separator="," suffix="+" />
          </CardTitle>
          
            {/* <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge> */}
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  )
}