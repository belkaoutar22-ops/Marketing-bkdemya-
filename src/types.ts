export const GOOGLE_CALENDAR_URL = "https://calendar.google.com/appointments/schedules/AcZssZ2dmM4Gt8bTnXVlX5QVl8iFdEmWDrv0C5FR2Q8eHmfwecLGH-B1vwyxqwGiclMuNXX5Qaym_ek1";
export const WHATSAPP_URL = "https://wa.me/212717912730";
export const PHONE_DISPLAY = "+212 717 912 730";

export interface BenefitCard {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TargetIndustry {
  id: string;
  title: string;
  icon: string;
  badge: string;
}
