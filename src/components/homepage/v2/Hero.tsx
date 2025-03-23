import { CheckCircle2, Zap, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import fakeDashboard from "@/imgs/bpx-fake-dashboard.png";
import { WAITLIST_FORM } from "@/components/constants/urls.const";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-1.5 animate-pulse">
              <Badge className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white px-3 py-1 border-0">
                <Zap className="h-3.5 w-3.5 mr-1" />
                Coming Soon
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Experience Seamless Digital Payments: Fast, Secure, and
              Cost-Effective
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Empowering Philippine businesses and individuals with
              next-generation payment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WAITLIST_FORM}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800"
                >
                  Join the Waitlist
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#comparison">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative h-[300px] w-[350px] overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-900 opacity-20" />
              <img
                src={fakeDashboard}
                alt="BPxPay Dashboard Preview"
                className="object-cover h-[300px] w-[350px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
                <div>
                  <p className="text-sm font-medium">Payment Successful</p>
                  <p className="text-xs text-muted-foreground">
                    Transaction completed in 0.3s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
