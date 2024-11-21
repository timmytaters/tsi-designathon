import payload from '@/assets/payload.json'

export const usePayload = () => payload as {
  id: string,
  firstName: string,
  lastName: string,
  jobTitle: string,
  department: string | null,
  dateHired: string,
  phone: string,
  email: string,
  thumbnailURI: string | null
}[]