import { WAITLIST_FORM } from "@/components/constants/urls.const"

export const redirectToWaitlistForm = () => {
  const formAddress = WAITLIST_FORM
  window.open(formAddress, "_blank")
}
