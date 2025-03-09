import { Shield, Lock, CheckCircle, Award } from "lucide-react"

export const TrustIndicator = () => {
  return (
    <section className="border-y bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Blockchain secured</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Audited smart contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">99.99% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
